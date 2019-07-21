import * as firebase from "firebase";

//import { FirebaseConfig } from "../config/keys";

//CONFIGURATION FIREBASE
const firebaseConfig = {
    apiKey: 'AIzaSyBHSQ_nqPKYlbe6we2tGL7lSkmcRfIDG-I',
    authDomain: 'react-3bdc8.firebaseapp.com',
    databaseURL: 'https://react-3bdc8.firebaseio.com',
    projectId: 'react-3bdc8',
    storageBucket: '',
    messagingSenderId: '911892523479',
    appId: '1:911892523479:web:cae3b2649bbd1226'
};


firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
