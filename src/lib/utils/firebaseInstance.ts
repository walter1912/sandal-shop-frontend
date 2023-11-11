// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKnJsy431Oh-x1y9FBFEhnz-5e6x0qI-0",
  authDomain: "sandal-project.firebaseapp.com",
  projectId: "sandal-project",
  storageBucket: "sandal-project.appspot.com",
  messagingSenderId: "739556599151",
  appId: "1:739556599151:web:2dee427e603fa6442cb49a",
  measurementId: "G-N7WYL8RDLH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authFirebase = getAuth(app);
export const dbFirebase = getFirestore(app);