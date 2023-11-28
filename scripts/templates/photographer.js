function photographerTemplate(data) {
    const { name, portrait } = data;

    const picture = `assets/PhotographersIDPhotos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // ajout de la const P pour afficher le pays, la ville et la phrase 
        // const p = document.createElement ( 'p' )
        // P.textContent = tagline;
        // article.appendChild(p);
        
        article.appendChild(img);
        article.appendChild(h2); 

        return (article);
    }
    return {
        //  name, picture,
          getUserCardDOM }
}
