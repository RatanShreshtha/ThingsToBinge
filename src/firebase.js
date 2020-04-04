import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  projectId: "things-to-watch-in-quarantine"
});

export const db = firebase.firestore();
