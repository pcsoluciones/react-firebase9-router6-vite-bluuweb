import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCetpoRPVSybOKmbwlx9_UqcfGxDGIXmMU",
  authDomain: "react-2022-97294.firebaseapp.com",
  projectId: "react-2022-97294",
  storageBucket: "react-2022-97294.appspot.com",
  messagingSenderId: "27128113505",
  appId: "1:27128113505:web:659767c0f786943bf3fd20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }