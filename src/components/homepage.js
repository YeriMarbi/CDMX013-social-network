/* eslint-disable max-len */
import { getPost, savePost, } from '../lib/auth.js';

const formHomePage = (e) => {
  e.preventDefault();
  const post = document.getElementById('post-description').value;
  savePost(post);
};

export const homepage = () => {
  const divPosts = document.createElement('div');
  divPosts.className = 'div-posts';
  const divHomePage = document.createElement('div');
  divHomePage.className = 'homePage';
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/logo.png';
  imgLogo.setAttribute('id', 'logoImgHome');
  const message = document.createElement('h1');

  const formHome = document.createElement('div');
  formHome.className = 'homePage';
  formHome.id = 'post-form';
  const labelTitle = document.createElement('label');
  labelTitle.className = 'title';
  const labelDescription = document.createElement('label');
  labelDescription.className = 'description';
  const inputDescription = document.createElement('input');
  inputDescription.id = 'post-description';
  inputDescription.setAttribute('placeholder', 'Escribe algo...');
  const btnPost = document.createElement('button');
  btnPost.id = 'btn-post-save';

  message.textContent = 'Bienvenida';

  btnPost.textContent = 'Publicar';

  btnPost.addEventListener('click', formHomePage);

  divHomePage.append(imgLogo, message, formHome, labelTitle, labelDescription, inputDescription, btnPost, divPosts);
  return divHomePage;
};

const querySnapshot = await getPost();
querySnapshot.forEach(doc => {
  const collectionPost = doc.data()
  console.log(collectionPost);
});