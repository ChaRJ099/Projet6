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

      // let totalLikes = 0;

      function displayMedia(media, filter) {
        if (filter == "likes") {
          function compareLikes(a, b) {
            if (a.likes > b.likes) {
              return -1;
            }
            if (a.likes < b.likes) {
              return 1;
            }
            return 0;
          }
          media.sort(compareLikes);
        }
        if (filter == "date") {
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
          media.sort(compareDate);
        }
        if (filter == "title") {
          function compareTitle(a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          }
          media.sort(compareTitle);
        }

        const photographGallery = document.querySelector(".photograph-gallery");
        photographGallery.innerHTML = "";

        mediaFiltered = [];
        media.forEach((media) => {
          if (media.photographerId === photographerId) {
            mediaFiltered.push(media);
            // totalLikes += media.likes;
            // let textTotalLikes = document.createElement("span");
            // textTotalLikes.textContent = totalLikes;
          }
        });

        mediaFiltered.forEach((media) => {
          const mediaModel = mediaFactory(media, photographerName);
          const mediaCardDOM = mediaModel.getMediaCardDOM();

          photographGallery.appendChild(mediaCardDOM);
        });

        console.log("mediaFiltered");
        console.log(mediaFiltered);
      }
      displayMedia(data.media, "");

      const select = document.querySelector("#order-by");

      select.addEventListener("change", (event) => {
        displayMedia(data.media, event.target.value);
      });

      photographHeader.appendChild(userCardDOM);
    }
  });
}

getPhotographer(photographerId);
