import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyA_SiXzPzU0yO7b2BIWNx_Z0nshkBOUFF4",
    authDomain: "scoots-website.firebaseapp.com",
    databaseURL: "https://scoots-website.firebaseio.com",
    projectId: "scoots-website",
    storageBucket: "scoots-website.appspot.com",
    messagingSenderId: "485648366501"
};

firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode + " - " + errorMessage);
});

export default firebase;