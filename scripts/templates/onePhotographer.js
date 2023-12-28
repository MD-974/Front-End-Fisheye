function displayData(photographer, photographerMedia) {
   const {city, country, name, portrait, price, tagline} = photographer;
   const {media} =photographerMedia
   const picture = `assets/Photographers/${portrait}`;
   // const { media } = photographerMedia;
   //  console.log(photographerMedia)
  

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
    //onephotographer_allCoeurprix => onephtographer_likes
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
    const imagesVideos = document.createElement ("div");
    imagesVideos.setAttribute("class", "onephotographer_images-videos");
  
    //tableau pour calculer tous les likes d'un photographe
    allLikes = [];
    
    // elements "images" ou "video"  
   photographerMedia.map(media => {
   
      // div conteneur "contien les information (image,titre, like, coeur) pour chaques medias (images/videos) d'un photographe"
      const mediasCard = document.createElement ("div");
      mediasCard.setAttribute("class", "onephotographer_media-card");
      // mediasCard.style.background = "lightgrey"


      if (media.image) {
         const mediasImage = document.createElement ("img");
         const urlImage = `assets/medias/${media.image}`;
         mediasImage.setAttribute("src", urlImage);
         mediasImage.setAttribute("class", "onephotographer_imageMedias");
         mediasImage.setAttribute("width", "350px");
         mediasImage.setAttribute("height", "300px");
         mediasImage.style.borderRadius = "5px";
         // imagesVideos.append(mediasImage);
         mediasCard.append(mediasImage);
      }else if (media.video) {
         const mediasVideo = document.createElement ("video");
         mediasVideo.setAttribute("controls", "controls");
         mediasVideo.setAttribute("width", "350px");
         mediasVideo.setAttribute("height", "300px");
         mediasVideo.style.borderRadius = "5px";
         mediasVideo.style.objectFit = "cover";
         const videoSource = document.createElement ("source");
         const urlVideo = `assets/medias/${media.video}`;
         videoSource.setAttribute("src", urlVideo);
         videoSource.setAttribute("type", "video/mp4");
         mediasVideo.append(videoSource);
         // imagesVideos.append(mediasVideo);
         mediasCard.append(mediasVideo);
      }

      const mediasInfos = document.createElement ("div");
      mediasInfos.setAttribute("class", "onephotographer_medias-infos");
      mediasInfos.style.display = "flex";
      mediasInfos.style.alignItems = "center";
      mediasInfos.style.justifyContent = "space-between"
      // mediasInfos.style.background = "lightgreen"
         
     // element "titre du media(image ou video)"   
      const mediasTitre = document.createElement ("h3");
      mediasTitre.textContent = media.title;
      mediasTitre.style.color = "#901C1C";
      mediasTitre.style.fontWeight = "400";
      mediasTitre.setAttribute("font-size", "24px");
      // imagesVideos.appendChild(mediasTitre);
      mediasInfos.appendChild(mediasTitre);

      const mediasLikeWrapper = document.createElement ("div");
      mediasLikeWrapper.setAttribute("class", "onephotographer_medias-likes-wrapper");
      mediasLikeWrapper.style.display = "flex";
      mediasLikeWrapper.style.gap ="5px";
      // mediasLikeWrapper.style.background = "lightyellow"

     // element "like du media(image ou video)"
      const mediaslike = document.createElement ("p");
      mediaslike.textContent = media.likes;
      allLikes.push(media.likes)
      mediaslike.style.color = "#901C1C";
      mediaslike.style.fontWeight = "500";
      mediaslike.setAttribute("font-size", "24px");
      // imagesVideos.appendChild(mediaslike);
      mediasLikeWrapper.appendChild(mediaslike);

     // element "coeur du media(image ou video)"
      const mediasCoeur = document.createElement ("p");
      mediasCoeur.innerHTML = "<i class='fa-regular fa-heart'></i>";
      mediasCoeur.style.color = "#901C1C";
      // imagesVideos.appendChild(mediasCoeur);
      mediasLikeWrapper.appendChild(mediasCoeur);

      imagesVideos.appendChild(mediasCard);
      mediasCard.appendChild(mediasInfos);
      mediasInfos.appendChild(mediasLikeWrapper)
   })

    //-------- Creations des elements  de la "div" allCoeurprix -----------
    const prixText = document.createElement( 'p' );
    prixText.textContent = price + "€/jour";
    prixText.setAttribute("class", "onephotographer_prix");


    const coeurText = document.createElement( "div" );
   //  coeurText.innerHTML = "10000<i class='fa-solid fa-heart'><i>";
    coeurText.innerHTML = allLikes.reduce((a, b) => a + b) + "<i class='fa-solid fa-heart'><i>";
    coeurText.setAttribute("class", "onephotographer_coeur-text");

 

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
   //  imagesVideos.appendChild(images)
    // pour la "div" allCoeurprix
    allCoeurprix.appendChild(prixText);
    allCoeurprix.appendChild(coeurText);


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

}

async function init() {
 // Récuperation de l'id de l'url
    const paramsUrl = new URLSearchParams(window.location.search);
    const id = paramsUrl.get("id");

 // Récupère les datas d'un photographe
    const dataOnePhotographe  = await getOnePhotographer(id);
// Récupère les media d'un photographe
    const mediaOnePhotographe  = await getOnePhotographerMedia(id);



    displayData(dataOnePhotographe, mediaOnePhotographe);
}   

init()