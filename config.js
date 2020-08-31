import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  aapiKey: "AIzaSyCO2CNaLJCNDgfytlYMxxOmgdpZsZymd0Y",
  authDomain: "bartersystem-f7624.firebaseapp.com",
  databaseURL: "https://bartersystem-f7624.firebaseio.com",
  projectId: "bartersystem-f7624",
  storageBucket: "bartersystem-f7624.appspot.com",
  messagingSenderId: "678558517042",
  appId: "1:678558517042:web:15bf78c445343f1d83792b",
  measurementId: "G-P21W0THHZG"
};
  // Initialize Firebase
  
  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();