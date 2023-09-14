import {
  getVocab, getSingleVocab, deleteVocab, languageFilter
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab, emptyVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocab(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => {
            if (array.length) {
              showVocab(array);
            } else {
              emptyVocab();
            }
          });
        });
      }
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user.uid, vocabObj));
    }
  });

  document.querySelector('#store').addEventListener('click', (e) => {
    if (e.target.id.includes('filter-english')) {
      languageFilter('English').then(showVocab);
    }

    if (e.target.id.includes('filter-spanish')) {
      languageFilter('Spanish').then(showVocab);
    }

    if (e.target.id.includes('filter-all')) {
      getVocab(user.uid).then(showVocab);
    }
  });
};

export default domEvents;
