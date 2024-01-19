function photographerTemplate(data) {
    const { city, country, name, portrait, price, tagline } = data;
    const picture = `assets/Photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("id", "photographer_image");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + name);
        img.setAttribute("class", "photographer_image");

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("class", "photographer_nom");

        const lienPhotographe = document.createElement ( 'a' );
        lienPhotographe.setAttribute("href", "photographer.html?id=" + data.id);
        lienPhotographe.setAttribute("class", "photographer_lien");
        lienPhotographe.appendChild(img);
		lienPhotographe.appendChild(h2);

        const villeText = document.createElement ( 'p' );
        villeText.textContent = city + ", " + country;
        villeText.setAttribute("class", "photographer_ville");

        const taglineText = document.createElement( 'p' );
		taglineText.textContent = tagline;
        taglineText.setAttribute("class", "photographer_tagline");

        const priceText = document.createElement( 'p' )
        priceText.textContent = price + "€/jour";
        priceText.setAttribute("class", "photographer_prix");
          
        // ajout de article.appendChild pour l'affichage dans l'ordre des elements
        article.appendChild(lienPhotographe)
        article.appendChild(villeText);
        article.appendChild(taglineText);
        article.appendChild(priceText);

        return (article);
    }
    return { city, country, name, picture, price, tagline, getUserCardDOM }
}
