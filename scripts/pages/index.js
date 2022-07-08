/**
 * Récupère le fichier JSON dans un objet data
 */
async function getPhotographers() {
  const jsonFile = "data/photographers.json";
  fetch(jsonFile)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayData(data.photographers);
    });
}

/**
 * Affiche le photographer card
 *
 * @param {*} photographers
 */
function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userIndexCardDOM = photographerModel.getUserIndexCardDOM();

    photographersSection.appendChild(userIndexCardDOM);
  });
}

getPhotographers();
