/**
 * Data représente les valeurs du fichier json
 *
 * @param {*} data
 * @param {*} photographerName
 * @param {*} index
 * @param {*} totalLikes
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function mediaFactory(data, photographerName, index, totalLikes) {
  const { title } = data;
  let likes = data.likes;

  /**
   * Fonction qui créer un modèle de card media
   * @returns
   */
  function getMediaCardDOM() {
    const article = document.createElement("article");
    const footerCard = document.createElement("div");
    const footerLikes = document.createElement("div");
    const titleCard = document.createElement("h2");
    const likesCard = document.createElement("p");
    const iconCard = document.createElement("div");
    const likesPriceBox = document.querySelector(".likes-price-box");
    const nameSplited = photographerName.replace(" ", "-");
    let textTotalLikes = document.querySelector("#total-likes");
    let clicked = false;

    footerCard.classList.add("footer-card");
    footerLikes.classList.add("footer-likes");
    iconCard.classList.add("fa-solid");
    iconCard.classList.add("fa-heart");
    iconCard.classList.add("icon-card");
    article.classList.add("media-card-container");
    titleCard.textContent = title;
    likesCard.textContent = likes;
    textTotalLikes.textContent = totalLikes;

    if (data.image) {
      const image = data.image;

      const pictureLink = `assets/images/${nameSplited}/${image}`;
      const buttonSmallImg = document.createElement("button");
      const imgCard = document.createElement("img");

      buttonSmallImg.classList.add("button-img-small");
      buttonSmallImg.setAttribute("value", "Ouvrir la vue lightbox");
      imgCard.setAttribute("src", pictureLink);
      imgCard.setAttribute("alt", title);
      buttonSmallImg.setAttribute("onclick", `currentSlide(${index})`);
      imgCard.classList.add("img-small");

      article.appendChild(buttonSmallImg);
      buttonSmallImg.appendChild(imgCard);
    }

    if (data.video) {
      const video = data.video;
      const videoLink = `assets/images/${nameSplited}/${video}`;
      const buttonSmallVideo = document.createElement("button");
      const sourceVideo = document.createElement("source");
      const videoCard = document.createElement("video");

      buttonSmallVideo.classList.add("button-video-small");
      buttonSmallVideo.setAttribute("value", "Ouvrir la vue lightbox");
      videoCard.classList.add("video-small");
      buttonSmallVideo.setAttribute("onclick", `currentSlide(${index})`);
      sourceVideo.setAttribute("src", videoLink);

      article.appendChild(buttonSmallVideo);
      videoCard.appendChild(sourceVideo);
      buttonSmallVideo.appendChild(videoCard);
    }

    function toogleLike() {
      totalLikes = parseFloat(textTotalLikes.dataset.likes);
      console.log(totalLikes);
      clicked = !clicked;
      if (clicked) {
        likes += 1;
        totalLikes += 1;
      }
      if (!clicked) {
        likes -= 1;
        totalLikes -= 1;
      }
    }
    /**
     * Met à jour le total des likes
     */
    function updateTotalLikes() {
      likesCard.textContent = likes;
      textTotalLikes.textContent = totalLikes;
      textTotalLikes.dataset.likes = totalLikes;
    }

    article.appendChild(footerCard);
    footerCard.appendChild(titleCard);
    footerCard.appendChild(footerLikes);
    footerLikes.appendChild(likesCard);
    footerLikes.appendChild(iconCard);
    likesPriceBox.appendChild(textTotalLikes);
    iconCard.addEventListener("click", function () {
      toogleLike();
      updateTotalLikes();
    });

    return article;
  }
  return { getMediaCardDOM };
}
