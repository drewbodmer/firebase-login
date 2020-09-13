import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_3kOjLk8xBc1uUxrDEAKJCExNsPFFOhU',
  authDomain: 'native-login-da769.firebaseapp.com',
  databaseURL: 'https://native-login-da769.firebaseio.com',
  projectId: 'native-login-da7694',
  storageBucket: 'native-login-da769.appspot.com',
//   messagingSenderId: '12345-insert-yourse',
  appId: '1:454694518142:ios:f8cb616d5a3450b179872f',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
