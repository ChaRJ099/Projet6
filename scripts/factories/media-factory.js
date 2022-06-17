function mediaFactory(data, photographerName) {
  console.log(photographerName);
    const { title, image, likes, date, price } = data;
  
    const picture = `assets/images/${photographerName}/${image}`;
  
    function getMediaCardDOM() {
      const article = document.createElement("article");
      const imgCard = document.createElement("img");
      imgCard.setAttribute("src", picture);
      const titleCard = document.createElement("h2");
      const likesCard = document.createElement("span");
      const dateCard = document.createElement("span");
      const priceCard = document.createElement("span");
  
      titleCard.textContent = title;
      likesCard.textContent = likes;
      dateCard.textContent = date;
      priceCard.textContent = price + "€/jour";
  
      article.appendChild(imgCard);
      article.appendChild(titleCard);
      article.appendChild(likesCard);
      article.appendChild(dateCard);
      article.appendChild(priceCard);
      return article;
    }
    return { title, picture, getMediaCardDOM };
  }