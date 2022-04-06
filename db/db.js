const firebase = require('firebase-admin');
const { firebaseConfig } = require('../config');
const firebaseConfig = {
    apiKey: "AIzaSyBdWlJwWKI0bVFnYJSgdulyW6baxPL5PBU",
    authDomain: "sitepessoal-b6700.firebaseapp.com",
    projectId: "sitepessoal-b6700",
    storageBucket: "sitepessoal-b6700.appspot.com",
    messagingSenderId: "106969405687",
    appId: "1:106969405687:web:93a3e880c8fabaac459bf2"
}

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;