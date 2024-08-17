import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-qLNbN7f6tqRSMpqaBwGYk8Vs0QdAZfc",
  authDomain: "zeromistauth.firebaseapp.com",
  projectId: "zeromistauth",
  storageBucket: "zeromistauth.appspot.com",
  messagingSenderId: "66217418367",
  appId: "1:66217418367:web:c8dea8437ca9e0d98be94a",
  measurementId: "G-W869X5G71G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var loginpush = document.getElementById("loginpush")
loginpush.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password)

    const auth = getAuth()

    signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        console.log('login ok')
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid)
        let newtab = document.createElement('a');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const link = urlParams.get('redirect')

        newtab.href = `${link}`;
        newtab.click()
    }).catch((error)=>{
        console.log(error)
        const errorCode = error.code;
        if (errorCode === 'auth/invalid-credential'){
            console.log('password sbagliata')
        }else{
            console.log('account non esiste')
        }
    })


})