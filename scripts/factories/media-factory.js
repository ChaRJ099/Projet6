function mediaFactory(data, photographerName) {
  console.log(photographerName);
    const { title, image, likes, date } = data;
  
    const picture = `assets/images/${photographerName}/${image}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const linkSmallImg = document.createElement("a");
      linkSmallImg.setAttribute("href", "#");
      linkSmallImg.classList.add("link-img-small");
      const imgCard = document.createElement("img");
      imgCard.setAttribute("src", picture);
      imgCard.classList.add("img-small");

      const titleCard = document.createElement("h2");
      const likesCard = document.createElement("span");
      const dateCard = document.createElement("span");
  
      titleCard.textContent = title;
      likesCard.textContent = likes;
      dateCard.textContent = date;
  
      article.appendChild(linkSmallImg);
      linkSmallImg.appendChild(imgCard);
      article.appendChild(titleCard);
      article.appendChild(likesCard);
      article.appendChild(dateCard);
      return article;
    }
    return { title, picture, getMediaCardDOM };
  }