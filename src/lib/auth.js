import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './firebase.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const register = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);

export const registerWithGoogle = () => signInWithPopup(auth, provider);
export const userLogin = (emailValueLogin, passwordValueLogin) => signInWithEmailAndPassword(auth, emailValueLogin, passwordValueLogin)
