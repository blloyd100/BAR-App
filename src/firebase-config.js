/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyD3tgWVZSxsSiGnrmDtmjy_dhjQV8Epgow",
  authDomain: "friendlychat-4696b.firebaseapp.com",
  projectId: "friendlychat-4696b",
  storageBucket: "friendlychat-4696b.appspot.com",
  messagingSenderId: "442039530873",
  appId: "1:442039530873:web:a9c3dfa52d69471f342ba8"

};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyD3tgWVZSxsSiGnrmDtmjy_dhjQV8Epgow",
  authDomain: "friendlychat-4696b.firebaseapp.com",
  projectId: "friendlychat-4696b",
  storageBucket: "friendlychat-4696b.appspot.com",
  messagingSenderId: "442039530873",
  appId: "1:442039530873:web:a9c3dfa52d69471f342ba8"
};
