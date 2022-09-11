import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './firebase.js';

export const auth = getAuth(app);