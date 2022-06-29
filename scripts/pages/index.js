//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const jsonFile = "data/photographers.json";
  fetch(jsonFile)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayData(data.photographers);
    });
}

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userIndexCardDOM = photographerModel.getUserIndexCardDOM();
    // const linkCard = document.createElement("a");
    // const id = photographers.id;
    // const photographerPage = `photographer.html?id=${id}`;

    // linkCard.setAttribute("href", photographerPage);
    photographersSection.appendChild(userIndexCardDOM);
    // linkCard.appendChild(contentCard);
  });
}

getPhotographers();
