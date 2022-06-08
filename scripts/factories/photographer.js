function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const nameCard = document.createElement( 'h2' );
        // const cityCard = document.createElement( 'p' );
        // const countryCard = document.createElement( 'p' );
        const taglineCard = document.createElement( 'p' );
        const locationCard = document.createElement( 'p' );
        const priceCard = document.createElement( 'span' );
        nameCard.textContent = name;
        locationCard.textContent = country+" "+city;
        // countryCard.textContent = country;
        taglineCard.textContent = tagline;
        priceCard.textContent = price+"€/jour";
        article.appendChild(img);
        article.appendChild(nameCard);
        article.appendChild(locationCard);
        article.appendChild(taglineCard);
        article.appendChild(priceCard);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}