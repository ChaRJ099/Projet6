function headerPhotographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const headerContent = document.createElement("div");
    const contactButton = document.createElement("button");
    const img = document.createElement("img");

    const headerDescription = document.createElement("div");
    const nameCard = document.createElement("h1");
    const taglineCard = document.createElement("span");
    const locationCard = document.createElement("span");
    const likesPriceBox = document.querySelector(".likes-price-box");
    const priceCard = document.createElement("span");
    // let textTotalLikes = document.createElement("span");

    const totalLikesElement = document.querySelector("#total-likes");
    let totalLikes = totalLikesElement.dataset.totalLikes;
    totalLikes = 0;
    // console.log("totalLikes: " + totalLikes);

    // media.forEach(media) => {
    //   if (media.photographerId === photographerId) {
    //     // totalLikes += media.likes;
    //   }

    priceCard.textContent = " " + price + "€/jour";
    // textTotalLikes.textContent = totalLikes;

    // likesPriceBox.appendChild(textTotalLikes);
    likesPriceBox.appendChild(priceCard);

    headerContent.classList.add("photograph-header-content");
    img.setAttribute("src", picture);
    nameCard.classList.add("photograph-header-title");
    headerDescription.classList.add("photograph-header-description");
    contactButton.classList.add("contact_button");
    contactButton.onclick = () => displayModal();

    nameCard.textContent = name;
    locationCard.textContent = country + ", " + city;
    taglineCard.textContent = tagline;

    contactButton.textContent = "Contactez-moi";

    headerContent.appendChild(headerDescription);
    headerDescription.appendChild(nameCard);
    headerDescription.appendChild(locationCard);
    headerDescription.appendChild(taglineCard);
    headerContent.appendChild(contactButton);
    headerContent.appendChild(img);

    return headerContent;
  }
  return { getUserCardDOM };
}
