# Web push JS
=========================
> Version 1.0.9

> This is a node module for push notifications, integrated with Nodejs Server & Webpush

> This is node module can support for many framework. [Angular, Vue, pure JS]

## Install
### Requirements

- A project created from the list: [Angular, Vue, pure JS]

- Run: 
```bash
npm install web-push-js
```

- add this line `"webpush": "wpush"` to `scripts` section in `package.json`:
```
"scripts": {
  ...
  "webpush": "wpush"
  ...
}
```
- Run command line to init our services:
```
npm run webpush
```

- You will see the list of frameworks, please make the proper choice!

### Vuejs

when you choose `vuejs`.

You need to setup some environment for it in `main.js`

```bash
import webPush from 'web-push-js'

const apiUrl = 'https://web-push-js-server.herokuapp.com';
const serverKey = 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI';
webPush.settingEnv(`${apiUrl}/save-subscription`, serverKey);
webPush.requestNotiPermission();
```

### Angular

when you choose `angular`.

You need to setup some environment for it in `main.js`

```bash
import webPush from 'web-push-js'

const apiUrl = 'https://web-push-js-server.herokuapp.com';
const serverKey = 'BIZ8E6td2p2qwepGtOt8IG-JZz1VVFt7F1MTNj4LZE6VFXlmKxl4cZKM8qP5kJIHdJvHZPVqfbrpiSBb6iLXILI';
webPush.settingEnv(`${apiUrl}/save-subscription`, serverKey);
webPush.requestNotiPermission();
```

### Pure Js



### Build and Test
- Service worker will not run in Development, so to test it, you need to build your project with `npm run build`.

- Check your `dist` folder. Try to run it with `http-server` or install plugin [`web server for chrome`](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-ntp-launcher)


## Licence

> Usage is under provisioned of @AsianTechInc

UNLICENSED
