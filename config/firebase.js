import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAq3F_9cn_1tJnNP1S3Soao4TCc79dOwaE",
  authDomain: "mind-bridge-a93eb.firebaseapp.com",
  projectId: "mind-bridge-a93eb",
  storageBucket: "mind-bridge-a93eb.appspot.com",
  messagingSenderId: "1052298113718",
  appId: "1:1052298113718:web:2abbf8ed75b0c7e6f7ac17"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
