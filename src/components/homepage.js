//import { onNavigate } from "../main.js";

export const homepage = () => {
    const div = document.createElement('div');
    div.className = 'welcome';
    const returnButton = document.createElement('button');
  returnButton.setAttribute('id', 'btnReturn0');

  div.append(returnButton);
  return div;
}