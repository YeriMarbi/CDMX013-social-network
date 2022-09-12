import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const register = (emailValue, passwordValue) => {
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      onNavigate('/homepage');

      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
