function mediaFactory(data, photographerName) {
  console.log(photographerName);
    const { title, likes, date } = data;

    function getMediaCardDOM() {
      const article = document.createElement("article");

      const titleCard = document.createElement("h2");
      const likesCard = document.createElement("span");
      const dateCard = document.createElement("span");
     
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

      titleCard.textContent = title;
      likesCard.textContent = likes;
      dateCard.textContent = date;
  

      article.appendChild(titleCard);
      article.appendChild(likesCard);
      article.appendChild(dateCard);
      return article;
    }
    return { getMediaCardDOM };
    
  }