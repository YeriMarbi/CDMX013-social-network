import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from '../lib/auth.js';

// eslint-disable-next-line max-len
export const register = (emailValue, passwordValue) => createUserWithEmailAndPassword(auth, emailValue, passwordValue);
