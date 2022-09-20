/* eslint-disable max-len */
import {
  getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import {
  getFirestore, collection, addDoc, getDocs,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { onNavigate } from '../main.js';
import { app } from './firebase.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const registerWithGoogle = () => signInWithPopup(auth, provider);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const savePost = (post) => {
  addDoc(collection(db, 'posts'), { post });
};

export const getPost = () => getDocs(collection(db, 'posts'));

// export const observador = () => onAuthStateChanged(auth, (user));

export function loginStateUser() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const email = user.email;
      console.log('Existe un usuario activo', uid, email);
      onNavigate('/homepage');
    } else {
      console.log('no existe usuario activo');
    }
  });
}

// export const observador = () => onAuthStateChanged(auth, (user));

// observador() {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       const email = user.email;
//       console.log('Existe un usuario activo', uid, email);
//       onNavigate('/');
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       console.log('no existe usuario activo');
//       onNavigate('/');
//     }
//   }
