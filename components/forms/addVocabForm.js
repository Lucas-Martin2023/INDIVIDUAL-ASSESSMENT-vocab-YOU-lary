import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}"required>
      </div>
      <div class="form-check">
      <input type="checkbox" class="form-check-input" id="languageTech" ${obj.languageTech ? 'checked' : ''}>
      <label class="form-check-label" for="languageTech">languageTech?</label>
    </div>
    <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
