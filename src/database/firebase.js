import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyB83sZfOpnLHYetnuIC44exhZCHUohYr_8',
  authDomain: 'salve-github-database.firebaseapp.com',
  databaseURL: 'https://salve-github-database-default-rtdb.firebaseio.com',
  projectId: 'salve-github-database',
  storageBucket: 'salve-github-database.appspot.com',
  messagingSenderId: '511955835169',
  appId: '1:511955835169:web:12dc40e427316d53ec8660',
  measurementId: 'G-LJKSR32LJT',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
