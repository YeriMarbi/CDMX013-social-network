import { onNavigate } from '../main.js';

export const createAccount = () => {
  const form = document.createElement('form');
  const user = document.createElement('input');
  const userName = document.createElement('p');
  const email = document.createElement('p');
  const password = document.createElement('p');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  const returnButton = document.createElement('button');

  userName.textContent = 'Nombre de Usuario';
  email.textContent = 'Correo electronico';
  password.textContent = 'Contraseña';

  returnButton.addEventListener('click', () => {
    onNavigate('/');
  });

  form.append(returnButton, userName, user, email, inputEmail, password, inputPassword);
  return form;
};
