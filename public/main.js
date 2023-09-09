import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Vocab-YOU-lary!</h1>
  `;

  ViewDirectorBasedOnUserAuthStatus();
};

init();
