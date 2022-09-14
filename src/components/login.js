import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth } from '../lib/auth.js';

export const login = () => {
  const divLogin = document.createElement('div');
  divLogin.className = 'login';
  const email = document.createElement('p');
  const password = document.createElement('p');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.className = 'emailLogin';
  inputEmail.setAttribute('placeholder', 'correo electronico');
  inputEmail.setAttribute('id', 'inputEmailLogin');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'min. 6 caracteres');
  inputPassword.setAttribute('id', 'inputPasswordLogin');
  const returnButton = document.createElement('button');
  returnButton.setAttribute('id', 'btnReturnLogin');
  returnButton.src = './img/comuniapp.png';
  const sendButton = document.createElement('button');
  sendButton.setAttribute('id', 'btnSendlogin');
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/logo.png';
  imgLogo.setAttribute('id', 'logoImg');
  const messageErrorPassword = document.createElement('p');
  messageErrorPassword.className = 'messageError';
  const messageError = document.createElement('p');
  messageError.className = 'messageError';
  const messageErrorCatch = document.createElement('p');
  messageErrorCatch.className = 'messageError';

  email.textContent = 'Correo electronico';
  password.textContent = 'Contraseña';
  sendButton.textContent = 'INGRESAR';
  returnButton.textContent = 'Regresar';

  returnButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    messageError.innerHTML = '';

    const emailValueLogin = document.getElementById('inputEmailLogin').value;
    const passwordValueLogin = document.getElementById('inputPasswordLogin').value;

    if (emailValueLogin === '') {
      messageError.innerHTML = 'Ingresa un correo electrónico';
    }

    if (emailValueLogin === '') {
      messageErrorPassword.innerHTML = 'Ingresa una contraseña';
    }

    signInWithEmailAndPassword(auth, emailValueLogin, passwordValueLogin)
      .then((userCredential) => {
        const user = userCredential.user;
        onNavigate('/homepage');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        if (errorCode === 'auth/wrong-password') {
          messageErrorCatch.innerHTML = 'Contraseña incorrecta';
        }
        if (errorCode === 'auth/user-not-found') {
          messageErrorCatch.innerHTML = 'Correo no registrado';
        }
      });
  });
  // eslint-disable-next-line max-len
  divLogin.append(returnButton, imgLogo, email, inputEmail, messageError, password, inputPassword, messageErrorPassword, messageErrorCatch, sendButton);
  return divLogin;
};
