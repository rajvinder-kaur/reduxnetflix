// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5VHCqr8AENMds7Op6mtH7UTy9aIweolY",
  authDomain: "netflix-redux-demo.firebaseapp.com",
  projectId: "netflix-redux-demo",
  storageBucket: "netflix-redux-demo.appspot.com",
  messagingSenderId: "222991926763",
  appId: "1:222991926763:web:d95ee8d8ec94edd3c685ae",
  measurementId: "G-R4T94FCH8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);