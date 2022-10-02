// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaxm1WJ9PErISZ6eRAUbcn-HJH_XaP4Fo",
  authDomain: "foodbee-7b0e3.firebaseapp.com",
  projectId: "foodbee-7b0e3",
  storageBucket: "foodbee-7b0e3.appspot.com",
  messagingSenderId: "1072740360182",
  appId: "1:1072740360182:web:0e9b56af20f8d9327671d7"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth }; 