
    //Mettre le code JavaScript lié à la page photographer.html
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const jsonFile = '../../data/photographers.json';
    fetch(jsonFile)
    .then(response => {
      return response.json()
    })
    .then((data) => {
        displayData(data.photographers);
    })
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};


getPhotographers();