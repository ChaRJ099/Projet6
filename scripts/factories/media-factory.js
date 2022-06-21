function mediaFactory(data, photographerName) {
  const { title, likes, date } = data;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    const footerCard = document.createElement("div");
    const footerLikes = document.createElement("div");
    const titleCard = document.createElement("h2");
    const likesCard = document.createElement("span");
    const iconCard = document.createElement("span");
    const dateCard = document.createElement("span");

    footerCard.classList.add("footer-card");
    iconCard.classList.add("icon-card");

    titleCard.textContent = title;
    likesCard.textContent = likes;
    iconCard.textContent = " " + "X";
    // dateCard.textContent = date;

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
    }

    if (data.video) {
      const video = data.video;
      const videoLink = `assets/images/${photographerName}/${video}`;
      const sourceVideo = document.createElement("source");
      const videoCard = document.createElement("video");
      videoCard.style.width = "280px";
      videoCard.style.height = "280px";
      article.appendChild(videoCard);
      videoCard.appendChild(sourceVideo);
      sourceVideo.setAttribute("src", videoLink);
    }

    article.appendChild(footerCard);
    footerCard.appendChild(titleCard);
    footerCard.appendChild(footerLikes);
    footerLikes.appendChild(likesCard);
    footerLikes.appendChild(iconCard);
    // article.appendChild(dateCard);
    return article;
  }
  return { getMediaCardDOM };
}
