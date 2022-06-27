import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDaEL1cvUETq_nISlebvQJmwgvJW1Z0AUA',
  authDomain: 'linkedin-clone-oba.firebaseapp.com',
  projectId: 'linkedin-clone-oba',
  storageBucket: 'linkedin-clone-oba.appspot.com',
  messagingSenderId: '453162394064',
  appId: '1:453162394064:web:060d52b0d68d30017359d5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
