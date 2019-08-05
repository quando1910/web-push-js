self.urlB64ToUint8Array = base64String => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.saveSubscription = async (apiUrl, subscription) => {
  const SERVER_URL = apiUrl;
  const response = await fetch(SERVER_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subscription),
  })
  return response.json();
};

self.addEventListener('activate', async () => {
  const serverKey = new URL(location).searchParams.get('serverKey');
  const apiUrl = new URL(location).searchParams.get('apiUrl');
  try {
    const convertedVapidKey = urlB64ToUint8Array(serverKey);
    const subscription = await self.registration.pushManager.subscribe({
      userVisibleOnly: true, 
      applicationServerKey: convertedVapidKey 
    });
    const response = await saveSubscription(apiUrl, subscription);
  } catch (err) {
    console.log('Error', err)
  }
});

self.addEventListener('push', function(event) {
  if (event.data) {
    console.log('Push event!! ', event.data.text());
    const obj = event.data.json();
    showLocalNotification(obj.title, obj.description, obj.icon, self.registration);
  } else {
    console.log('Push event but no data');
  }
});

self.showLocalNotification = (title, body, icon, swRegistration) => {
  const options = {
    body,
    icon
  };
  swRegistration.showNotification(title, options);
};
