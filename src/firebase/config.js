import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAx9K3hOkBHxbGS4YUJ4iR8VN7mhFm0ho4",
  authDomain: "udemy-apps-f8b0c.firebaseapp.com",
  databaseURL: "https://udemy-apps-f8b0c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "udemy-apps-f8b0c",
  storageBucket: "udemy-apps-f8b0c.appspot.com",
  messagingSenderId: "456463822488",
  appId: "1:456463822488:web:a9a84f48840074637c6aed"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const db = firebase.firestore()

export { db }