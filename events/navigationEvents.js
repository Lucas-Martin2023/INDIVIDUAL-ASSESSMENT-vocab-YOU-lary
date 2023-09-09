import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import { emptyVocab, showVocab } from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then((array) => {
      if (array.length) {
        showVocab(array);
      } else {
        emptyVocab();
      }
    });
  });
};

export default navigationEvents;
