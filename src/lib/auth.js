import { getAuth,  signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './firebase.js';


export const auth = getAuth(app);

// eslint-disable-next-line max-len
export const register = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);

export const provider = new GoogleAuthProvider();

export const registerWithGoogle = () => signInWithPopup(auth, provider);



