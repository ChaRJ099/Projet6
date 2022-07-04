// eslint-disable-next-line no-unused-vars
function headerPhotographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserPhotographCardDOM() {
    const img = document.createElement("img");
    const headerTitle = document.querySelector(".photograph-header-title");
    const headerPhoto = document.querySelector(".photograph-header-photo");
    const nameCard = document.createElement("h1");
    const taglineCard = document.createElement("p");
    const locationCard = document.createElement("p");
    const likesPriceBox = document.querySelector(".likes-price-box");
    const priceCard = document.querySelector("#price");
    const nameContact = document.querySelector(".name-contact");

    priceCard.textContent = " " + price + "€/jour";

    likesPriceBox.appendChild(priceCard);
    img.setAttribute("alt", name);
    img.setAttribute("src", picture);
    nameCard.classList.add("gallery-title");

    nameCard.textContent = name;
    nameContact.textContent = name;
    locationCard.textContent = country + ", " + city;
    taglineCard.textContent = tagline;

    headerTitle.appendChild(nameCard);
    headerTitle.appendChild(locationCard);
    headerTitle.appendChild(taglineCard);
    headerPhoto.appendChild(img);
  }
  return { getUserPhotographCardDOM };
}
