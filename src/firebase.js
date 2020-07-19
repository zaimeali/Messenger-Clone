import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxHZqWkhKTqMyBJN7JSaDtwkkZrUU-r94",
    authDomain: "messenger-clone-a05fb.firebaseapp.com",
    databaseURL: "https://messenger-clone-a05fb.firebaseio.com",
    projectId: "messenger-clone-a05fb",
    storageBucket: "messenger-clone-a05fb.appspot.com",
    messagingSenderId: "550768136000",
    appId: "1:550768136000:web:60c845fe9c7a77c3fdf4a5"
});

const db = firebaseApp.firestore();

export { db };