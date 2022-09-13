import { onNavigate } from '../main.js';

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
  imgLogo.setAttribute('id', 'logoImg')
  const messageErrorPassword = document.createElement('p');
  messageErrorPassword.className = 'messageError';
  const messageError = document.createElement('p');
  messageError.className = 'messageError';

  email.textContent = 'Correo electronico';
  password.textContent = 'Contraseña';
  sendButton.textContent = 'INGRESAR';
  returnButton.textContent = 'Regresar';

  returnButton.addEventListener('click', () => {
    onNavigate('/');
  });

  divLogin.append(returnButton, imgLogo, email, inputEmail,  messageError, password, inputPassword, messageErrorPassword, sendButton);
  return divLogin;
};
