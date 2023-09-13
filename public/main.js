import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const welcome = () => {
  document.querySelector('#app').innerHTML = `
  `;
};

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

welcome();
init();
