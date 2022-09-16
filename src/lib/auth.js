import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
// import { } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging.js"
import { app } from './firebase.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// export const db = getFirestore();

export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const registerWithGoogle = () => signInWithPopup(auth, provider);
export const userLogin = (email, password) => signInWithEmailAndPassword(auth, email, password);
// export const saveTask = (title, description) => {
//     addDoc(collection(db, 'tasks'), { title, description }
//     )
// };
