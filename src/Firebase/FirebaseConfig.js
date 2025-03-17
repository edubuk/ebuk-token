// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_apiKey,
  authDomain: process.env.REACT_FIREBASE_authDomain,
  projectId: process.env.REACT_FIREBASE_projectId,
  storageBucket: "cv-on-blockchain.appspot.com",
  messagingSenderId: process.env.REACT_FIREBASE_messagingSenderId,
  appId: process.env.REACT_FIREBASE_appId,
  measurementId: process.env.REACT_FIREBASE_measurementId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDCdEKD6Usz7A-Aa_RNRuA9Tx1FqEE0X-U",
//   authDomain: "edubuk-payment.firebaseapp.com",
//   projectId: "edubuk-payment",
//   storageBucket: "edubuk-payment.firebasestorage.app",
//   messagingSenderId: "430159397928",
//   appId: "1:430159397928:web:c36477545ba5e835ac611d",
//   measurementId: "G-54JQGVM68D"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);