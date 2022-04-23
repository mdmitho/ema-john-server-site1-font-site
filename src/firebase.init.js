// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgX8esMRLLJLP7yD7xrvBXt_wfA4Y862A",
  authDomain: "fir-auth-with-ema-john.firebaseapp.com",
  projectId: "fir-auth-with-ema-john",
  storageBucket: "fir-auth-with-ema-john.appspot.com",
  messagingSenderId: "626913157709",
  appId: "1:626913157709:web:e800d645630e9297f5b204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;