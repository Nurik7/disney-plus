// Import the functions you need from the SDKs you need
import {getAnalytics} from "firebase/analytics";
import firebase from 'firebase/compat'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDi_Sp7dqF7fOoZi1Hj54uSzpPKSZvq0HA",
    authDomain: "disney-plus-clone-8b50b.firebaseapp.com",
    projectId: "disney-plus-clone-8b50b",
    storageBucket: "disney-plus-clone-8b50b.appspot.com",
    messagingSenderId: "941213864337",
    appId: "1:941213864337:web:9d0ee483e8cbdf7b580a30",
    measurementId: "G-F4RXVK83KH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const analytics = getAnalytics(firebaseApp);

export {auth, provider, storage, analytics}
export default db