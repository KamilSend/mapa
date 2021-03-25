import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMFdB6H51Ut_sed2bFkO9O0FvM--dPTng",
    authDomain: "mapa-6578a.firebaseapp.com",
    projectId: "mapa-6578a",
    storageBucket: "mapa-6578a.appspot.com",
    messagingSenderId: "821622880820",
    appId: "1:821622880820:web:225830526a309ad05f6861",
    measurementId: "G-3K4RY98RSW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database;

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();