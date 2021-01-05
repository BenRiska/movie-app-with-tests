import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBboeNLFd-NqI7e3gq7ZRGxKd8pD5YijSE",
    authDomain: "watchable-7c803.firebaseapp.com",
    projectId: "watchable-7c803",
    storageBucket: "watchable-7c803.appspot.com",
    messagingSenderId: "229961387874",
    appId: "1:229961387874:web:40418a42ad6c532fd8a63b",
    measurementId: "G-CZ4Y8RLKLZ"
  };
  
  const firebase = Firebase.initializeApp(config);
  // 2) when seeding the database you'll have to uncomment this!

  // 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
  
  export { firebase };