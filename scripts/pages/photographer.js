const url = new URL(window.location.href);
const photographerId = parseInt(url.searchParams.get("id"));
let photographerName = "";

/**
 * Récupère le fichier JSON dans un objet data
 */
async function getPhotographer() {
  const jsonFile = "../../data/photographers.json";
  fetch(jsonFile)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayData(data);
    });
}
/**
 *
 * @param {*} data
 * Data représente le contenu du fichier JSON
 * Affiche le photographer card et le contenu des médias
 */
function displayData(data) {
  data.photographers.forEach((photographer) => {
    if (photographer.id === photographerId) {
      photographerName = photographer.name;

      const photographerModel = headerPhotographerFactory(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      const photographHeader = document.querySelector(".photograph-header");

      let totalLikes = 0;

      data.media.forEach((media) => {
        if (media.photographerId === photographerId) {
          totalLikes += media.likes;

          const mediaModel = mediaFactory(media, photographerName);
          const mediaCardDOM = mediaModel.getMediaCardDOM();
          const photographGallery = document.querySelector(
            ".photograph-gallery"
          );

          photographGallery.appendChild(mediaCardDOM);

          let cliqued = false;

          function toogleLike() {
            media.likes + 1;
            return !cliqued;
          }
          iconCard.addEventListener("click", function () {
            toogleLike();
          });
        }
      });

      const likesPriceBox = document.querySelector(".likes-price-box");
      const priceCard = document.createElement("span");
      const price = photographer.price;
      let textTotalLikes = document.createElement("span");

      priceCard.textContent = " " + price + "€/jour";
      textTotalLikes.textContent = totalLikes;

      photographHeader.appendChild(userCardDOM);
      likesPriceBox.appendChild(textTotalLikes);
      likesPriceBox.appendChild(priceCard);
    }
  });
}

getPhotographer(photographerId);
