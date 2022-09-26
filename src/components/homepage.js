import { savePost, onGetPost } from '../lib/auth.js';

const formHomePage = () => {
  const post = document.getElementById('post-description').value;
  savePost(post);
};

export const homepage = () => {
  const divPosts = document.createElement('div');
  divPosts.className = 'div-posts';
  divPosts.id = 'div-View';
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

  message.textContent = 'Bienvenidx';
  btnPost.textContent = 'Publicar';

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    formHomePage();
    inputDescription.value = '';
  });

  onGetPost((querySnapshot) => {
    divPosts.innerHTML = '';
    console.log('onGetPost');
    querySnapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.type);
      const collectionPost = doc.data();
      const allPost = document.createElement('section');
      allPost.className = 'card-post';
      const postContent = document.createElement('p');
      postContent.textContent = collectionPost.post;
      const editBtn = document.createElement('button');
      editBtn.className = 'btn-edit';
      editBtn.data = ('data-id', doc.id);
      editBtn.textContent = 'Editar';

      divPosts.append(allPost, postContent, editBtn);
    });

    const editPost = divPosts.querySelectorAll('.btn-edit');
    editPost.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        console.log(e.target.dataset.id);
      });
    });
  });

  divHomePage.append(
    imgLogo,
    message,
    formHome,
    labelTitle,
    labelDescription,
    inputDescription,
    btnPost,
    divPosts,
  );
  return divHomePage;
};
