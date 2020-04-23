import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiRs_ov91O8lpgROOp_YowyDZeBjq-xqQ",
    authDomain: "minggu-12.firebaseapp.com",
    databaseURL: "https://minggu-12.firebaseio.com",
    projectId: "minggu-12",
    storageBucket: "minggu-12.appspot.com",
    messagingSenderId: "208265740640",
    appId: "1:208265740640:web:2576b536d198cc29e21e05",
    measurementId: "G-8T5RFDF81H"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;