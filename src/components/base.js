import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({

    apiKey: "AIzaSyACGOxGRBNhKKsgFoHZGLuuPCvGug8Th-k",
    authDomain: "catch-of-the-day-akila.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-akila.firebaseio.com",
    // projectId: "catch-of-the-day-akila",
    // storageBucket: "catch-of-the-day-akila.appspot.com",
    // messagingSenderId: "543648038682"


});

const base =Rebase.createClass(firebaseApp.database());

//This is a named export
export{firebaseApp};

//this is a defsult export
export default base;
