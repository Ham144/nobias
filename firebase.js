// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQOLAkQhKVFVuHDc0a2C4s1R3ZCdHXmrc",
    authDomain: "nobias-417312.firebaseapp.com",
    projectId: "nobias-417312",
    storageBucket: "nobias-417312.appspot.com",
    messagingSenderId: "850526059975",
    appId: "1:850526059975:web:ac7fc31b4eb3842c272de2",
    measurementId: "G-LTLSJTPLEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);