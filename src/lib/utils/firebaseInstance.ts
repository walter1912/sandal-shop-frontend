// 'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
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
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase

let app: any;
let analytics: any;
let dbFirebase: any;
let authFirebase: any;
if (typeof window != undefined) {
  app = initializeApp(firebaseConfig);
  analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
  dbFirebase = getFirestore(app);
  authFirebase = getAuth(app);
}
export { app, analytics, dbFirebase, authFirebase };
