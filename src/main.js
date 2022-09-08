import { welcome } from './components/welcome.js';
import { createAccount } from './components/createAccount.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/createAccount': createAccount,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component());
};

root.appendChild(component());
