import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC2aHtpXscLuZXiw0LjVxquPy6quo_sGiw",
    authDomain: "takeoff-admin-portal-dev.firebaseapp.com",
    projectId: "takeoff-admin-portal-dev",
    storageBucket: "takeoff-admin-portal-dev.appspot.com",
    messagingSenderId: "378600332126",
    appId: "1:378600332126:web:7d6ee1b511db1106e80dcf",
    measurementId: "G-FW1H97XX4Z"
};
  
export const firebaseApp = initializeApp(firebaseConfig);
  
export const SERVER_URL = 'https://backend-admin-staging.herokuapp.com';
