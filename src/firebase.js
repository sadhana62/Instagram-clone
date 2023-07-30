

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAekW5J2GbxAqRFO1tBWUQRPPxCvVU6t7c",
  authDomain: "instagram-clone-9b493.firebaseapp.com",
  projectId: "instagram-clone-9b493",
  storageBucket: "instagram-clone-9b493.appspot.com",
  messagingSenderId: "771721369304",
  appId: "1:771721369304:web:d33e6843f0973a4f7929ad"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();