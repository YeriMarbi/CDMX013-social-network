import {
  savePost, onGetPost, getPost, updatePost,
} from '../lib/auth.js';

let editStatus = false;
let id = '';
const formHomePage = () => {
  const postEditSave = document.getElementById('post-description').value;
  // inputDescription.value = '';
  if (!editStatus) {
    savePost(postEditSave);
  } else {
    updatePost(id, {post: postEditSave});
    editStatus = false;
  }
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

  onGetPost((querySnapshot) => {
    divPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.id);
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
      btn.addEventListener('click', async (e) => {
        const postId = await getPost(e.target.data);
        const postInfo = postId.data();
        console.log(postInfo);

        inputDescription.value = postInfo.post;
        editStatus = true;
        id = postId.id;
        btnPost.textContent = 'Guardar';
      });
    });
  });
  btnPost.textContent = 'Publicar';

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    formHomePage();

    inputDescription.value = '';
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
