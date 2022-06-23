function headerPhotographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const img = document.createElement("img");
    const headerTitle = document.querySelector(".photograph-header-title");
    const headerPhoto = document.querySelector(".photograph-header-photo");
    const nameCard = document.createElement("h1");
    const taglineCard = document.createElement("span");
    const locationCard = document.createElement("span");
    const likesPriceBox = document.querySelector(".likes-price-box");
    const priceCard = document.querySelector("#price");

    priceCard.textContent = " " + price + "€/jour";

    likesPriceBox.appendChild(priceCard);

    // headerContent.classList.add("photograph-header-content");
    img.setAttribute("src", picture);
    nameCard.classList.add("gallery-title");
    // headerDescription.classList.add("photograph-header-description");

    nameCard.textContent = name;
    locationCard.textContent = country + ", " + city;
    taglineCard.textContent = tagline;

    // headerContent.appendChild(headerDescription);
    headerTitle.appendChild(nameCard);
    headerTitle.appendChild(locationCard);
    headerTitle.appendChild(taglineCard);
    headerPhoto.appendChild(img);

    // return headerContent;
  }
  return { getUserCardDOM };
}
