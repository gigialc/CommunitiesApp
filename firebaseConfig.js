import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiu8trrnzdXZRYp5ZV9BgHvF1FEx8LOUo",
    authDomain: "destig-femme-pi.firebaseapp.com",
    projectId: "destig-femme-pi",
    storageBucket: "destig-femme-pi.appspot.com",
    messagingSenderId: "436753083575",
    appId: "1:436753083575:web:edbbed664461d231e87132",
    measurementId: "G-EEN8CS2N66"
  };
  
// Initialize Firebase

const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

export default firebase;