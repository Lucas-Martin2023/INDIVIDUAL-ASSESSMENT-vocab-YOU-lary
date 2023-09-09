import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container">
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Language Tech</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
