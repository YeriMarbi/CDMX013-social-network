/* eslint-disable max-len */
import {
  getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { app } from './firebase.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const registerWithGoogle = () => signInWithPopup(auth, provider);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);

export function observador() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      const email = user.email;
      console.log('Existe un usuario activo', uid, email);
      // ...
    } else {
      // User is signed out
      // ...
      console.log('no existe usuario activo');
      onNavigate('/');
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
//   };
