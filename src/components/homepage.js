// import { onNavigate } from "../main.js";

export const homepage = () => {
  const divHomePage = document.createElement('div');
  divHomePage.className = 'homePage';
  const imgLogo = document.createElement('img');
  imgLogo.src = './img/logo.png';
  imgLogo.setAttribute('id', 'logoImgHome');
  const message = document.createElement('h1');
  const returnButton = document.createElement('button');
  returnButton.setAttribute('id', 'btnReturnhome');
 
message.textContent = 'En Construcción...';
divHomePage.append(returnButton,  imgLogo, message);
  return divHomePage;
};
