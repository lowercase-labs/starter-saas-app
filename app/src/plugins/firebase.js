import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const authModule = firebase.auth;
export const db = firebase.firestore();
export const dbModule = firebase.firestore;
export const app = firebase.app();
