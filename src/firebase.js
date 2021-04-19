import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9VZV-xkm0qrQbg9No8FnoxiRgXjoHDFI",
  authDomain: "wedding-rsvp-8b346.firebaseapp.com",
  databaseURL: "https://wedding-rsvp-8b346-default-rtdb.firebaseio.com",
  projectId: "wedding-rsvp-8b346",
  storageBucket: "wedding-rsvp-8b346.appspot.com",
  messagingSenderId: "309616922660",
  appId: "1:309616922660:web:6f2839762b052df2bc48b1",
  measurementId: "G-G30R11EDD2",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;
