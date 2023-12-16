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


   //"DIV" photograph-photosMedias
    //onePhotographer_allTrier
    const allTrier = document.createElement("div");
    allTrier.setAttribute("class", "onePhotographer_allTrier");
    
    const allMedias = document.createElement("div");
    allMedias.setAttribute("class", "onephotographer_allMedias");

    const allCoeurprix = document.createElement("div");
    allCoeurprix.setAttribute("class", "onephotographer_allCoeurprix");
    
 //---------- Creations des elements dans les 3 "div" de (onePhotographer_container) -------------

    //------"div" informations
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

    //------"div" contactButton
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

    //------"div" photographeImage
    // element "picture"
    const img = document.createElement( 'img' );
    img.setAttribute("id", "onephotographer_image");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de " + name);
    img.setAttribute("class", "onephotographer_image");




    const medias = document.createElement( 'label' );
    medias.setAttribute("class", "onephotographer_trier");
    medias.setAttribute("for", "tri-medias");
    medias.setAttribute("class", "label-medias");
    medias.textContent = "Trier par";

    const mediasSelect = document.createElement(  'select' );
    mediasSelect.setAttribute("class", "onephotographer_liste-deroulante");
    mediasSelect.setAttribute("name", "tri-liste");
    mediasSelect.setAttribute("id", "tri-medias");
   

    const imagesVideos = document.createElement ( "div" );
    imagesVideos.setAttribute("class", "onephotographer_images-videos");

    const prixText = document.createElement( 'p' );
    prixText.textContent = price + "€/jour";
   
    
    
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

    allMedias.appendChild(imagesVideos);

   
    allCoeurprix.appendChild(prixText)
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
    onephotographerCoeurprix.appendChild(allCoeurprix)
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