// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { register } from '../lib/auth.js';
import {registerWithGoogle} from '../lib/auth.js';

export const createAccount = () => {
  const divcreateAccount = document.createElement('div');
  divcreateAccount.setAttribute('id', 'createAccount');
  const user = document.createElement('input');
  const userName = document.createElement('p');
  const email = document.createElement('p');
  const password = document.createElement('p');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.className = 'emailRegister';
  inputEmail.setAttribute('placeholder', 'correo electronico');
  inputEmail.setAttribute('id', 'inputEmail');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'min. 6 caracteres');
  inputPassword.setAttribute('id', 'inputPassword');
  const returnButton = document.createElement('button');
  returnButton.setAttribute('id', 'btnReturn');
  returnButton.src = './img/comuniapp.png';
  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'btnSend');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/logo.png';
  const messageError = document.createElement('p');
  // messageError.setAttribute('id', 'pError');
  messageError.className = 'messageError';
  const messageErrorPassword = document.createElement('p');
  // messageError.setAttribute('id', 'pError');
  messageErrorPassword.className = 'messageError';

  userName.textContent = 'Nombre de Usuario';
  email.textContent = 'Correo electronico';
  password.textContent = 'Contraseña';
  sendButton.textContent = 'Enviar';
  returnButton.textContent = 'Regresar';

  returnButton.addEventListener('click', () => {
    onNavigate('/');
  });

  sendButton.addEventListener('click', (e) => {
    e.preventDefault();

    const emailValue = document.getElementById('inputEmail').value;
    const passwordValue = document.getElementById('inputPassword').value;

    if (emailValue === '') {
      messageError.innerHTML = 'Ingresa un correo electronico';
    }

    if (passwordValue === '') {
      messageErrorPassword.innerHTML = 'Ingresa una contraseña';
    }

    register(emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        onNavigate('/homepage');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  // eslint-disable-next-line max-len
  divcreateAccount.append(returnButton, userName, user, email, inputEmail, messageError, password, inputPassword, messageErrorPassword, sendButton, imgLogo);
  return divcreateAccount;
};
