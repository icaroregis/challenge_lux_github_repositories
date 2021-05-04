import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyB83sZfOpnLHYetnuIC44exhZCHUohYr_8',
  authDomain: 'salve-github-database.firebaseapp.com',
  projectId: 'salve-github-database',
  storageBucket: 'salve-github-database.appspot.com',
  messagingSenderId: '511955835169',
  appId: '1:511955835169:web:12dc40e427316d53ec8660',
  measurementId: 'G-LJKSR32LJT',
});

export const db = app.database();

//  var firebaseConfig = {
//    apiKey: 'AIzaSyB83sZfOpnLHYetnuIC44exhZCHUohYr_8',
//    authDomain: 'salve-github-database.firebaseapp.com',
//    projectId: 'salve-github-database',
//    storageBucket: 'salve-github-database.appspot.com',
//    messagingSenderId: '511955835169',
//    appId: '1:511955835169:web:12dc40e427316d53ec8660',
//    measurementId: 'G-LJKSR32LJT',
//  };
//  // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
