import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-vocab')) {
      const currentTime = new Date().toLocaleString();
      const payload = {
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#selectInput').value,
        timeSubmitted: currentTime,
        title: document.querySelector('#title').value,
        uid: user.uid
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
    }

    if (e.target.id.includes('update-vocab')) {
      const currentUpdateTime = new Date().toLocaleString();
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#selectInput').value,
        timeSubmitted: currentUpdateTime,
        title: document.querySelector('#title').value,
        uid: user.uid,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }
  });
};

export default formEvents;
