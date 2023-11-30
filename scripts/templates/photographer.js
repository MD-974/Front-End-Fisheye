function photographerTemplate(data) {
    const { name, portrait, tagline } = data;

    const picture = `assets/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
       
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        // ajout du setAttribute pour creer la class dans la DIV "photographers_section"
        img.setAttribute("class", "photographer_picture")

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        // ajout du setAttribute pour creer la class dans la DIV "photographers_section"
        h2.setAttribute("class", "photographer_name");

        // ajout de l'element "p'  pour afficher la ville et la region 
        // const villeText = document.createElement ( 'p' );
        // villeText.textContent = city + ", " + country;

        // ajout du setAttribute pour creer la class dans la DIV "photographers_section"
        // villeText.setAttribute("class", "photographer_villeText");
        // article.appendChild(villeText);

        // ajout de l'element "span" pour afficher le tagline 
        const taglineText = document.createElement( 'span' );
		taglineText.textContent = tagline;
        // ajout du setAttribute pour creer la class dans la DIV "photographers_section"
        taglineText.setAttribute("class", "photograper_taglineText")
        article.appendChild(taglineText);
		
        const price = document.createElement( 'p' );
        price.textContent = price + "€/jour";
        price.setAttribute("class", "photographer_price");
        article.appendChild(price);

        
        article.appendChild(img);
        article.appendChild(h2); 


        return (article);
    }
    return { name, picture,
        //  city,
        //  country,
         price,
         tagline, getUserCardDOM }
}
