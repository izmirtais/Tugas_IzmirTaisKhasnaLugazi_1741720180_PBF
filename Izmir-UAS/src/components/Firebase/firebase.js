import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyASTQj_ljxCxtHsxbJZYpFQR4h3Pp2j97I",
    authDomain: "izmir-uas.firebaseapp.com",
    databaseURL: "https://izmir-uas.firebaseio.com",
    projectId: "izmir-uas",
    storageBucket: "izmir-uas.appspot.com",
    messagingSenderId: "855082113452",
    appId: "1:855082113452:web:aa89ed597b3bed5191c209",
    measurementId: "G-WQTQH4DCP4"
  };

    class Firebase {
        constructor(){
            app.initializeApp(config);

            this.auth = app.auth();
            this.db = app.database();
        }

//authentication

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

//realtime

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

};

export default Firebase;