import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB1a2L7--7BCQDbOHoqkmIWFdY_JU3Jp8o",
    authDomain: "bed-time-stories-42079.firebaseapp.com",
    databaseURL: "https://bed-time-stories-42079.firebaseio.com",
    projectId: "bed-time-stories-42079",
    storageBucket: "bed-time-stories-42079.appspot.com",
    messagingSenderId: "826339681898",
    appId: "1:826339681898:web:15dc4af4df4b4b8ffccc13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();