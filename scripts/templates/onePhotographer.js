function displayData(photographer) {
    const {city, country, name, portrait, price, tagline } = photographer;
    const picture = `assets/Photographers/${portrait}`;


 //--------------------------- Creations des "DIV" --------------------------

   //"DIV" photograph-header

    //onePhotographer_headerContainer
    const headerContainer = document.createElement("div");
    headerContainer.setAttribute("class", "onePhotographer_headerContainer");
    //onePhotographer_informations
    const informations = document.createElement("div");
    informations.setAttribute("class", "onePhotographer_informations");
    //onePhotographer_button
    const contactButton = document.createElement("div");
    contactButton.setAttribute("class", "onePhotographer_button");
    //onePhotographer_image
    const photographeImage = document.createElement("div");
    photographeImage.setAttribute("class", "onePhotographer_image");


       // ---------------------------------------------------


    //"DIV" photograph-photosMedias

    //onePhotographer_allTrier
    const allTrier = document.createElement("div");
    allTrier.setAttribute("class", "onePhotographer_allTrier");
    //onephotographer_allMedias
    const allMedias = document.createElement("div");
    allMedias.setAttribute("class", "onephotographer_allMedias");
    //onephotographer_allCoeurprix
    const allCoeurprix = document.createElement("div");
    allCoeurprix.setAttribute("class", "onephotographer_allCoeurprix");

    const allCoeur = document.createElement("div");
    allCoeur.setAttribute("class", "onephtographer_likes");


    
    //-------- Creations des elements  de la "div" informations -----------
    // element "name"
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("class", "onePhotographer_nom");
    // element "city+country"
    const villeText = document.createElement("p");
    villeText.textContent = city + ", " + country;
    villeText.setAttribute("class", "onePhotographer_ville");
    // element "tagline"
    const taglineText = document.createElement("p");
    taglineText.textContent = tagline;
    taglineText.setAttribute("class", "onePhotographer_tagline"); 

    //-------- Creations des elements  de la "div" contactButton -----------
    // element "button"
	 const button = document.createElement("button");
    button.textContent = "Contactez-moi";
	 button.setAttribute("class", "onePhotographer_button");
    button.addEventListener("click", function () {
       const modal = document.getElementById("contact_modal");
       modal.style.display = "block";
       modal.focus();
       var modalOverlay = document.getElementById("modal-overlay");
       modalOverlay.style.display = "block";
    });
    //-------- Creations des elements  de la "div" photographeImage -----------
    // element "picture"
    const img = document.createElement( 'img' );
    img.setAttribute("id", "onephotographer_image");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de " + name);
    img.setAttribute("class", "onephotographer_image");


    //-------- Creations des elements  de la "div" allTrier -----------
    // element "label"
    const medias = document.createElement( 'label' );
    medias.setAttribute("class", "onephotographer_trier");
    medias.setAttribute("for", "tri-medias");
    medias.setAttribute("class", "label-medias");
    medias.textContent = "Trier par";
   // element "select"
    const mediasSelect = document.createElement(  'select' );
    mediasSelect.setAttribute("class", "onephotographer_liste-deroulante");
    mediasSelect.setAttribute("name", "tri-liste");
    mediasSelect.setAttribute("id", "tri-medias");
   
    //-------- Creations des elements  de la "div" allMedias -----------
    const imagesVideos = document.createElement ( "div" );
    imagesVideos.setAttribute("class", "onephotographer_images-videos");

    //-------- Creations des elements  de la "div" allCoeurprix -----------
    const prixText = document.createElement( 'p' );
    prixText.textContent = price + "€/jour";
    prixText.setAttribute("class", "onephotographer_prix");

    const likesText = document.createElement( "div" );
    likesText.setAttribute("class", "onephotographer_likes");

    const coeurText = document.createElement( "p" );
    coeurText.textContent = "---";
    coeurText.setAttribute("class", "onephotographer_coeur-text");

    const coeurImage = document.createElement ( "i" );
    coeurImage.setAttribute("class", "fa-regular fa-heart fas")

   
   //--------------------------------------------------------------
   //--------------------------------------------------------------
   //  const selectOption1 = document.createElement( 'option' );
   //  selectOption1.setAttribute("class", "onephotographer_option1");
   //  selectOption1.setAttribute("value", "populaire");
   //  selectOption1.textContent("populaire");
   //---------------------------------------------------------------
   //---------------------------------------------------------------




 //---------------------- ajout de 'article.appendChild' ------------------ 
    // pour la "div" informations
    informations.appendChild(h2);
    informations.appendChild(villeText);
    informations.appendChild(taglineText);
    // pour la "div" contactButton
    contactButton.appendChild(button);
    // pour la "div" photographeImage
    photographeImage.appendChild(img);
    // pour la "div" allTrier
    allTrier.appendChild(medias);
    allTrier.appendChild(mediasSelect);
    // pour la "div" allMedias
    allMedias.appendChild(imagesVideos);
    // pour la "div" allCoeurprix
    allCoeurprix.appendChild(prixText);
    allCoeurprix.appendChild(likesText);

    allCoeur.appendChild(coeurText);
    allCoeur.appendChild(coeurImage)

    //-------------------------------------
   //  selectOption1.appendChild(mediasSelect)
    //-------------------------------------



    
    
    const onePhotographerContainer = document.querySelector(".photograph-header");
    onePhotographerContainer.appendChild(headerContainer);
    const onePhotographerSection = document.querySelector(".onePhotographer_headerContainer");
    onePhotographerSection.appendChild(informations);
    const onePhotographerContact = document.querySelector(".onePhotographer_headerContainer");
    onePhotographerContact.appendChild(contactButton);
    const onePhotographerimage = document.querySelector(".onePhotographer_headerContainer");
    onePhotographerimage.appendChild(photographeImage);


    const onePhotographerallTrier = document.querySelector(".photograph-photosMedias");
    onePhotographerallTrier.appendChild(allTrier);

    const onePhotographerImagesvideos = document.querySelector(".photograph-photosMedias");
    onePhotographerImagesvideos.appendChild(allMedias);
    
    const onephotographerCoeurprix = document.querySelector(".photograph-photosMedias");
    onephotographerCoeurprix.appendChild(allCoeurprix);

    const onephotographer_allCoeurs = document.querySelector(".onephotographer_likes");
    onephotographer_allCoeurs.appendChild(allCoeur)


}

async function init() {
 // Récuperation de l'id de l'url
    const paramsUrl = new URLSearchParams(window.location.search);
    const id = paramsUrl.get("id");

 // Récupère les datas d'un photographe
    const dataOnePhotographe  = await getOnePhotographer(id);
    displayData(dataOnePhotographe);
}   

init()