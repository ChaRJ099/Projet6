function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;
  const photographerPage = `photographer.html`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const nameCard = document.createElement("h2");
    const taglineCard = document.createElement("p");
    const locationCard = document.createElement("p");
    const priceCard = document.createElement("span");
    const linkCard = document.createElement("a");
    linkCard.setAttribute("href", photographerPage);

    nameCard.textContent = name;
    locationCard.textContent = country + ", " + city;
    taglineCard.textContent = tagline;
    priceCard.textContent = price + "€/jour";

    article.appendChild(linkCard);
    linkCard.appendChild(img);
    linkCard.appendChild(nameCard);
    article.appendChild(locationCard);
    article.appendChild(taglineCard);
    article.appendChild(priceCard);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
