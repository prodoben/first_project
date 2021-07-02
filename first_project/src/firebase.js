import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig ={
        apiKey: "AIzaSyBVcOxIpOg-O2ZrNEaKo9t2zIBdZ143sJg",
        authDomain: "first-project-dictionary.firebaseapp.com",
        projectId: "first-project-dictionary",
        storageBucket: "first-project-dictionary.appspot.com",
        messagingSenderId: "351453082606",
        appId: "1:351453082606:web:d60aa7fa05bf5abf2bd4ff",
        measurementId: "G-KKCLP8G9VR"
 
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};