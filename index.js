var apiUrl = 'http://localhost:4000';
var serverKey = null;

const check = () => {
  if (!('serviceWorker' in navigator)) {
    throw new Error('No Service Worker support!')
  }
  if (!('PushManager' in window)) {
    throw new Error('No Push API Support!')
  }
}

const registerServiceWorker = async (apiUrlParams, serverKeyParams) => {
  const swRegistration = await navigator.serviceWorker.register('/wp-worker.js?apiUrl=' + encodeURIComponent(apiUrlParams) + '&serverKey=' + serverKeyParams); //notice the file name
  return swRegistration;
}

const requestNotificationPermission = async () => {
  const permission = await window.Notification.requestPermission();
  // value of permission can be 'granted', 'default', 'denied'
  // granted: user has accepted the request
  // default: user has dismissed the notification permission popup by clicking on x
  // denied: user has denied the request.
  if(permission !== 'granted'){
      throw new Error('Permission not granted for Notification');
  }
  return true;
}
const showLocalNotification = (title, body, swRegistration) => {
  const options = {
      body,
      // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
}

module.exports = {
  settingEnv: (apiUrlParams, serverKeyParams) => {
    apiUrl = apiUrlParams;
    serverKey = serverKeyParams;
  },
  requestNotiPermission : async() =>  {
    check();
    const permission =  await requestNotificationPermission();
    if (permission) {
      const swRegistration = await registerServiceWorker(apiUrl, serverKey);
      showLocalNotification('Register Successful', 'Let check API', swRegistration);
    }
  }
}
