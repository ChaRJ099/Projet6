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

      photographerModel.getUserPhotographCardDOM();

      //Fontion filtre media
      function displayMedia(media, filter) {
        totalLikes = 0;
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
        // console.log("mediaFiltered");
        // console.log(mediaFiltered);
        media.forEach((media) => {
          if (media.photographerId === photographerId) {
            let likes = media.likes;

            totalLikes += likes;

            mediaFiltered.push(media);
          }
        });
        let textTotalLikes = document.querySelector("#total-likes");
        textTotalLikes.textContent = totalLikes;

        mediaFiltered.forEach((media) => {
          const mediaModel = mediaFactory(media, photographerName);
          const mediaCardDOM = mediaModel.getMediaCardDOM();

          photographGallery.appendChild(mediaCardDOM);
        });
      }
      displayMedia(data.media, "");

      // let imgCards = document.querySelectorAll(".img-small");
      // console.log("imgCards");
      // console.log(imgCards);
      // imgCard.addEventListener("click", function () {
      //   console.log("media");
      //   console.log(media);
      // });
      const select = document.querySelector("#order-by");

      select.addEventListener("change", (event) => {
        displayMedia(data.media, event.target.value);
      });
    }
  });
}

getPhotographer(photographerId);
