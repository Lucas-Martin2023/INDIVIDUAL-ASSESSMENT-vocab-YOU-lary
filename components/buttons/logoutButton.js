import { signOut } from '../../utils/auth';
import clearDom from '../../utils/clearDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Logout</button>';
  document.querySelector('#login-form-container').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', () => {
    clearDom();
    signOut();
  });
};

export default logoutButton;
