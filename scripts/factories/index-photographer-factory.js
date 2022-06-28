// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;

  const picture = `assets/photographers/${portrait}`;

  const photographerPage = `photographer.html?id=${id}`;

  function getUserIndexCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const nameCard = document.createElement("h2");
    const taglineCard = document.createElement("span");
    const locationCard = document.createElement("span");
    const priceCard = document.createElement("span");
    const linkCard = document.createElement("a");

    article.classList.add("artist-card-container");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "");
    taglineCard.setAttribute("role", "text");
    locationCard.setAttribute("role", "text");
    priceCard.setAttribute("role", "text");
    linkCard.setAttribute("href", photographerPage);
    linkCard.setAttribute("title", "Aller vers la galerie de" + " " + name);

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
  return { name, picture, getUserIndexCardDOM };
}
