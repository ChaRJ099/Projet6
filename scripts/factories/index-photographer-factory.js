// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  const photographerPage = `photographer.html?id=${id}`;

  function getUserIndexCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const nameCard = document.createElement("h2");
    const taglineCard = document.createElement("p");
    const locationCard = document.createElement("p");
    const priceCard = document.createElement("p");
    const linkCard = document.createElement("a");

    article.classList.add("artist-card-container");
    img.setAttribute("src", picture);
    // img.setAttribute("alt", "Aller vers la galerie de" + " " + name);
    linkCard.setAttribute("href", photographerPage);
    linkCard.setAttribute("title", "Aller vers la galerie de" + " " + name);

    nameCard.textContent = name;
    locationCard.textContent = city + ", " + country;
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
  return { name, picture, getUserIndexCardDOM };
}
