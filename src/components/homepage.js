import {
  savePost, onGetPost, getPost, updatePost, deletePost,
} from '../lib/auth.js';

let editStatus = false;
let id = '';
const formHomePage = () => {
  const postEditSave = document.getElementById('post-description').value;
  if (!editStatus) {
    savePost(postEditSave);
  } else {
    updatePost(id, { post: postEditSave });
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
  btnPost.innerText = 'Publicar';

  onGetPost((querySnapshot) => {
    divPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const collectionPost = doc.data();

      const postContent = document.createElement('p');
      postContent.textContent = collectionPost.post;
      const editBtn = document.createElement('button');
      editBtn.className = 'btn-edit';
      editBtn.data = ('data-id', doc.id);
      console.log(editBtn.data);
      editBtn.textContent = 'Editar';
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn-delete';
      deleteBtn.data = ('data-id', doc.id);

      divPosts.append(postContent, editBtn, deleteBtn);
    });

    const editPost = divPosts.querySelectorAll('.btn-edit');
    console.log(editPost);
    editPost.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const postId = await getPost(e.target.data);
        const postInfo = postId.data();
        inputDescription.value = postInfo.post;
        editStatus = true;
        id = postId.id;
        btnPost.innerText = 'Guardar';
      });
    });
    const btnsDelete = divPosts.querySelectorAll('.btn-delete');
    console.log(btnsDelete);
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { data } }) => {
      const modal = document.createElement('section');
        modal.className = 'modal-class';
        const textModal = document.createElement('h3');
        const cancelbtn = document.createElement('button');
        const okbtn = document.createElement('button');
        okbtn.textContent = 'Eliminar';
        cancelbtn.textContent = 'Cancelar';
        textModal.textContent = 'Deseas eliminar este Post?';
        //okbtn.onclick = deletePost(data);

        divPosts.append(modal);
        modal.append(textModal, cancelbtn, okbtn);

        // deletePost(data);
      });
    });
  });

  btnPost.addEventListener('click', (e) => {
    e.preventDefault();
    formHomePage();

    inputDescription.value = '';
    btnPost.innerText = 'Publicar';
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
