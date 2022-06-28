const url = new URL(window.location.href);
const photographerId = parseInt(url.searchParams.get("id"));
let photographerName = "";
let totalLikes;
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

      // eslint-disable-next-line no-undef
      const photographerModel = headerPhotographerFactory(photographer);

      photographerModel.getUserPhotographCardDOM();

      //Fontion filtre media

      displayMedia(data.media, "");

      const select = document.querySelector("#order-by");

      select.addEventListener("change", (event) => {
        displayMedia(data.media, event.target.value);
      });
    }
  });
}

getPhotographer(photographerId);
function compareLikes(a, b) {
  if (a.likes > b.likes) {
    return -1;
  }
  if (a.likes < b.likes) {
    return 1;
  }
  return 0;
}
function compareDate(a, b) {
  a.date = new Date(a.date);
  b.date = new Date(b.date);

  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
}
function compareTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
function displayMedia(media, filter) {
  totalLikes = 0;
  if (filter == "likes") {
    media.sort(compareLikes);
  }
  if (filter == "date") {
    media.sort(compareDate);
  }
  if (filter == "title") {
    media.sort(compareTitle);
  }

  const photographGallery = document.querySelector(".photograph-gallery");
  const slideContainer = document.querySelector(".lightbox--slide");
  photographGallery.innerHTML = "";
  slideContainer.innerHTML = "";

  let mediaFiltered = [];

  media.forEach((elem) => {
    if (elem.photographerId === photographerId) {
      let likes = elem.likes;
      totalLikes += likes;
      mediaFiltered.push(elem);
    }
  });
  let textTotalLikes = document.querySelector("#total-likes");
  textTotalLikes.textContent = totalLikes;

  for (let index in mediaFiltered) {
    // eslint-disable-next-line no-undef
    const mediaModel = mediaFactory(
      mediaFiltered[index],
      photographerName,
      index,
      totalLikes
    );
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    photographGallery.appendChild(mediaCardDOM);
  }

  for (let index in mediaFiltered) {
    // eslint-disable-next-line no-undef
    const slideModel = slideFactory(mediaFiltered[index], photographerName);
    const slideCardDOM = slideModel.getSlideCardDOM();
    slideContainer.appendChild(slideCardDOM);
  }
}
