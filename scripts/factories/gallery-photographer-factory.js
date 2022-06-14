function photographerFactory(data) {
    const { name, portrait, city, country, tagline } = data;
  
    const picture = `assets/photographers/${portrait}`;
  
    function getUserCardDOM() {
        const headerContent = document.createElement("div");
        headerContent.classList.add("photograph-header-content");
        const contactButton = document.createElement("button");
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        const nameCard = document.createElement("h1");
        nameCard.classList.add("photograph-header-title");
        const taglineCard = document.createElement("span");
        const locationCard = document.createElement("span");
        const headerDescription = document.createElement("div");
        headerDescription.classList.add("photograph-header-description");

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
        contactButton.classList.add("contact_button");
        contactButton.onclick = function() { displayModal(); };
      return headerContent;
    }
    return { name, picture, getUserCardDOM };
  }
  