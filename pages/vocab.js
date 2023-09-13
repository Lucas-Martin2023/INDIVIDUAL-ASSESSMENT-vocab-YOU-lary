import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  if (!array.length) {
    domString += '<p>No Vocab Found</p>';
  } else {
    domString += `
    <button type="button" class="btn btn-light btn-lg" id="filter-all">All</button>
    <button type="button" class="btn btn-primary btn-lg" id="filter-english">English</button>
    <button type="button" class="btn btn-secondary btn-lg" id="filter-spanish">Spanish</button>
    `;
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Language: ${item.language}</h6>
          <p class="card-text">Definition: ${item.definition}</p>
          <p class="card-text">Time Submitted: ${item.timeSubmitted}</p>
          <a href="#" id="edit-vocab-btn--${item.firebaseKey}" class="card-link">Edit</a>
          <a href="#" id="delete-vocab-btn--${item.firebaseKey}" class="card-link">Delete</a>
      </div>
      </div>`;
    });
  }
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
