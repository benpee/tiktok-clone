import firebase from 'firebase';

// create user database, create collection of the videos(post)
// add autogen doc id, with field, type, value for all 

const firebaseConfig = {
    apiKey: "AIZzaSyCMh678",
    authDomain: "tik-tok-clone-eb635.firebaseapp.com",
    databaseUrl: "https://tik-tok-clone-eb635.firebaseapp.com",
    projectId: "tik-tok-clone-eb635",
    storageBucket: "tik-tok-clone-eb635.appspot.com",
    messageSenderId: "682358488631",
    appId: "1:582358408631:web.a32#183ccc2d9f2f2f432",
    measurementId: "G-38YHL3X3eF",
};

const firebaseApp = firebase.initialize(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
