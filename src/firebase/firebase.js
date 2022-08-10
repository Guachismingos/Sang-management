import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  getFirestore,
  onSnapshot,
  where,
  query,
  getDoc,
  doc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDlR0i_3EYxYB7YEpEFSlUO9b9mEtMKIhI",
  authDomain: "test-9c53f.firebaseapp.com",
  projectId: "test-9c53f",
  storageBucket: "test-9c53f.appspot.com",
  messagingSenderId: "287766754051",
  appId: "1:287766754051:web:a714ecad2d8ac4c057af36",
});

const db = getFirestore(app);

const auth = getAuth(app);

export {
  db,
  auth,
  signInWithEmailAndPassword,
  onSnapshot,
  collection,
  where,
  query,
  getDoc,
  doc,
};

export default app;
