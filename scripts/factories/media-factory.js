// eslint-disable-next-line no-unused-vars
function mediaFactory(data, photographerName, index, totalLikes) {
  const { title } = data;
  let likes = data.likes;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const footerCard = document.createElement("div");
    const footerLikes = document.createElement("div");
    const titleCard = document.createElement("span");
    const likesCard = document.createElement("span");
    const iconCard = document.createElement("i");
    const likesPriceBox = document.querySelector(".likes-price-box");
    let textTotalLikes = document.querySelector("#total-likes");
    let clicked = false;

    footerCard.classList.add("footer-card");
    iconCard.classList.add("fa-solid");
    iconCard.classList.add("fa-heart");
    iconCard.classList.add("icon-card");
    article.classList.add("media-card-container");
    titleCard.setAttribute("role", "text");
    likesCard.setAttribute("role", "text");
    iconCard.setAttribute("aria-label", "likes");

    titleCard.textContent = title;
    likesCard.textContent = likes;
    textTotalLikes.textContent = totalLikes;

    if (data.image) {
      const image = data.image;
      const pictureLink = `assets/images/${photographerName}/${image}`;
      const buttonSmallImg = document.createElement("button");
      const imgCard = document.createElement("img");

      buttonSmallImg.classList.add("button-img-small");
      buttonSmallImg.setAttribute("value", "Ouvrir la vue lightbox");
      imgCard.setAttribute("src", pictureLink);
      imgCard.setAttribute("alt", title);
      imgCard.setAttribute("onclick", `currentSlide(${index})`);
      imgCard.classList.add("img-small");

      article.appendChild(buttonSmallImg);
      buttonSmallImg.appendChild(imgCard);
    }

    if (data.video) {
      const video = data.video;
      const videoLink = `assets/images/${photographerName}/${video}`;
      const buttonSmallVideo = document.createElement("button");
      const sourceVideo = document.createElement("source");
      const videoCard = document.createElement("video");

      buttonSmallVideo.classList.add("button-video-small");
      buttonSmallVideo.setAttribute("value", "Ouvrir la vue lightbox");
      videoCard.classList.add("video-small");
      videoCard.setAttribute("alt", title);
      videoCard.setAttribute("onclick", `currentSlide(${index})`);
      sourceVideo.setAttribute("src", videoLink);

      article.appendChild(buttonSmallVideo);
      videoCard.appendChild(sourceVideo);
      buttonSmallVideo.appendChild(videoCard);
    }

    function toogleLike() {
      clicked = !clicked;
      if (clicked) {
        likes += 1;
        totalLikes += 1;
      }
      if (!clicked) {
        likes -= 1;
        totalLikes -= 1;
      }
      likesCard.textContent = likes;
      textTotalLikes.textContent = totalLikes;
    }

    article.appendChild(footerCard);
    footerCard.appendChild(titleCard);
    footerCard.appendChild(footerLikes);
    footerLikes.appendChild(likesCard);
    footerLikes.appendChild(iconCard);
    likesPriceBox.appendChild(textTotalLikes);
    iconCard.addEventListener("click", function () {
      toogleLike();
    });

    return article;
  }
  return { getMediaCardDOM };
}
