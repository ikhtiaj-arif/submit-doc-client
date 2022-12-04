// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDdk8d3y7pNvmua5y2H2QUGKR24E6SAStw",
//   authDomain: "auth-context-tailwind-m60.firebaseapp.com",
//   projectId: "auth-context-tailwind-m60",
//   storageBucket: "auth-context-tailwind-m60.appspot.com",
//   messagingSenderId: "239458055492",
//   appId: "1:239458055492:web:2ec4330b9c40ac29819311"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// REACT_APP_apiKey=AIzaSyDdk8d3y7pNvmua5y2H2QUGKR24E6SAStw
// REACT_APP_authDomain=auth-context-tailwind-m60.firebaseapp.com
// REACT_APP_projectId=auth-context-tailwind-m60
// REACT_APP_storageBucket=auth-context-tailwind-m60.appspot.com
// REACT_APP_messagingSenderId=239458055492
// REACT_APP_appId=1:239458055492:web:2ec4330b9c40ac29819311