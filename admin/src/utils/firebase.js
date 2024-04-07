import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "blogwave-4bb76.firebaseapp.com",
  projectId: "blogwave-4bb76",
  storageBucket: "blogwave-4bb76.appspot.com",
  messagingSenderId: "555219498526",
  appId: "1:555219498526:web:a380dbf7915ca1f511a00f",
};

export const app = initializeApp(firebaseConfig);
