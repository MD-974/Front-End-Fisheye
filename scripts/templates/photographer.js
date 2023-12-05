function photographerTemplate(data) {
    const { city, country, name, portrait, price, tagline } = data;

    const picture = `assets/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const villeText = document.createElement ( 'p' );
        const taglineText = document.createElement( 'span' );
        const priceText = document.createElement( 'p' );
        
        
        // ajout du textContent pour chaque const
        h2.textContent = name;
        villeText.textContent = city + "," + country;
		taglineText.textContent = tagline;
        priceText.textContent = price + "€/jour";
        
        // setAttribute "src" & "alt" pour l'element"img"
        img.setAttribute("src", picture)
        img.setAttribute("alt", "Photo de" + name)
        // ajout du setAttribute pour creer les "class" dans la DIV "photographers_section"
        img.setAttribute("class", "photographer_picture")
        h2.setAttribute("class", "photographer_name");
        villeText.setAttribute("class", "photographer_villeText");
        taglineText.setAttribute("class", "photograper_taglineText")
        priceText.setAttribute("class", "photographer_price");
        
        // ajout du article.appendChild pour l'affichage dans l'ordre des elements
        article.appendChild(img);
        article.appendChild(h2); 
        article.appendChild(villeText);
        article.appendChild(taglineText);
        article.appendChild(priceText);


        return (article);
    }
    return { city, country, name, picture, price, tagline, getUserCardDOM }
}
