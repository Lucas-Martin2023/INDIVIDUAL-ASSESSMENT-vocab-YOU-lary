import { signOut } from '../utils/auth';
import addVocabForm from '../components/forms/addVocabForm';
import { getVocab } from '../api/vocabData';
import { showVocab, emptyVocab } from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry-btn')) {
      addVocabForm(user.uid);
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('vocabulary-btn')) {
      getVocab(user.uid).then((array) => {
        if (array.length) {
          showVocab(array);
        } else {
          emptyVocab();
        }
      });
    }
  });
};

export default navigationEvents;
