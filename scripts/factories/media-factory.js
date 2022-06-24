function mediaFactory(data, photographerName) {
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

    titleCard.textContent = title;
    likesCard.textContent = likes;
    textTotalLikes.textContent = totalLikes;

    if (data.image) {
      const image = data.image;
      const pictureLink = `assets/images/${photographerName}/${image}`;
      const linkSmallImg = document.createElement("a");
      const imgCard = document.createElement("img");
      linkSmallImg.setAttribute("href", "#");
      linkSmallImg.classList.add("link-img-small");
      imgCard.setAttribute("src", pictureLink);
      imgCard.classList.add("img-small");
      article.appendChild(linkSmallImg);
      linkSmallImg.appendChild(imgCard);
      imgCard.onclick = displayModal(lightboxModal);
    }

    if (data.video) {
      const video = data.video;
      const videoLink = `assets/images/${photographerName}/${video}`;
      const sourceVideo = document.createElement("source");
      const videoCard = document.createElement("video");
      videoCard.classList.add("video-small");
      videoCard.style.width = "280px";
      videoCard.style.height = "280px";
      article.appendChild(videoCard);
      videoCard.appendChild(sourceVideo);
      sourceVideo.setAttribute("src", videoLink);
      videoCard.onclick = displayModal(lightboxModal);
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
