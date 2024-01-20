import { PhotographerMedia } from "../utils/PhotographerMedia.js";

function displayData(photographer, photographerMedia) {
   const {city, country, name, portrait, price, tagline} = photographer;
   const {media} = photographerMedia
   const picture = `assets/Photographers/${portrait}`;
   document.querySelector("#modalTitle2").innerHTML = name

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

   // Crée un élément de bouton avec le contenu texte et les attributs donnés,
   // et ajoute un addEventListener pour afficher une modale au clic
	const button = document.createElement("button");
    button.textContent = "Contactez-moi";
	 button.setAttribute("class", "onePhotographer_button");
    button.addEventListener("click", function () {
      const modal = document.getElementById("contact_modal");
            modal.style.display = "block";
            modal.focus();
      }
   );
     
   

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

 // "option" pour le select de "trier par"
 // Ajoute des options avec les valeurs "popularité, date et titre".
   mediasSelect.innerHTML = "<option value='Popularite'>Popularite</option>";
   mediasSelect.innerHTML += "<option value='Date'>Date</option>";
   mediasSelect.innerHTML += "<option value='Titre'>Titre</option>";
   
	
 // Ajoutez un gestionnaire d’événements pour le changement de la liste déroulante
   mediasSelect.addEventListener("change", function() {

    // Récupère la valeur sélectionnée dans la liste déroulante
    var selectedOption = mediasSelect.value;

    // Utilisez le switch pour trier les médias 
    //en fonction de l’option sélectionnée
    switch (selectedOption) {
       case "Popularite":
         console.log("trier par popularité");
         photographerMedia.sort((a, b) => b.likes - a.likes);
         console.log(photographerMedia.map(media => media.likes));
         break;
       case "Date":
         console.log("trier par date");
         photographerMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
         console.log(photographerMedia.map(media => media.date));
         break;
       case "Titre":
         console.log("trier par titre");
         photographerMedia.sort((a, b) => a.title > b.title ? 1 : -1);
         console.log(photographerMedia.map(media => media.title));
         break;
      }

    // Mettre à jour la liste des médias après le tri
    updateMediaList();
   });




 // Fonction pour mettre à jour la liste des médias après le tri
 function updateMediaList() {
    // Obtenez la div contenant les médias
    const imagesVideos = document.querySelector(".onephotographer_images-videos");
  
    // Supprimez tous les médias actuels de la div
    while (imagesVideos.firstChild) {
       imagesVideos.removeChild(imagesVideos.firstChild);
      }

    // Ajoutez les médias triés à la div
    photographerMedia.forEach(media => {
       const { mediasCard, mediaLikes } = mediaCardFactory(media, photographerMedia);
       imagesVideos.appendChild(mediasCard);
      });
   }
   


 // Fonction de calcul du total de likes pour un photographe.
 function getTotalLikes() {
    let allLikes = [];
    photographerMedia.map(media => {
       allLikes.push(media.likes);
      });
    return allLikes.reduce((a, b) => a + b);
   }

  
   
 //-------- Creations des elements  de la "div" allMedias -----------
 const imagesVideos = document.createElement ("div");
 imagesVideos.setAttribute("class", "onephotographer_images-videos");
   
   
 //-------- Creation des elements  de la "div" allCoeurprix -----------
 const prixText = document.createElement( 'p' );
 prixText.textContent = price + "€/jour";
 prixText.setAttribute("class", "onephotographer_prix");


 //-------- Creation  element de comptage de la "div" coeurText -----------
 const coeurText = document.createElement( "div" );
 // afficher le nombre de likes total et le coeur pour un photographe
 coeurText.setAttribute("class", "onephotographer_coeur-text");
 const compteurLikes = document.createElement("span");
 compteurLikes.id = "compteur-likes";
 const coeurLikes = document.createElement( "i");
 coeurLikes.classList.add("fa-solid", "fa-heart");
 coeurText.appendChild(compteurLikes);
 coeurText.appendChild(coeurLikes);

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
    
 // Met à jour le contenu de l'élément avec l'ID "compteur-likes" 
 // avec le nombre total de likes.
 document.getElementById("compteur-likes").innerHTML = getTotalLikes();
 
 photographerMedia.map(media => {
      const {mediasCard} = mediaCardFactory(media, photographerMedia );
      imagesVideos.appendChild(mediasCard);
   })
   // Ajout d'un dispatchEvent sur "change" 
   // pour qu'il soit pris en compte dès le début en triant par popularité.
   mediasSelect.dispatchEvent(new Event("change"));
}


// Initialise la page en récupérant les données et les médias du photographe. 
async function init() {
 // Récuperation de l'id de l'url
 const paramsUrl = new URLSearchParams(window.location.search);
 const id = paramsUrl.get("id");

 // Récupère les datas d'un photographe
 const dataOnePhotographe  = await getOnePhotographer(id);
 console.log("Données récupérées avec succès!");

 // Récupère les media d'un photographe
 const mediaOnePhotographe  = await getOnePhotographerMedia(id);
 console.log("Media récupérées avec succès!");
   //  console.log(mediaOnePhotographe)

 // Créer un nouvel objet "PhotographerMedia" en utilisant le média "mediaOnePhotographe".
 const objPhotographerMedias = new PhotographerMedia(mediaOnePhotographe);
   
 //  Afficher les datas et les medias d'un photographe
 displayData(dataOnePhotographe, objPhotographerMedias.medias);
 console.log("Affichage terminé!");

 //----- LIGHTBOX ----->
 // Ajout de l'addEventListener sur le "click" sur les images pour lancer la lightbox
 const lightboxMedia = document.querySelectorAll(".onephotographer_imageMedias")
   
 // console.log(lightboxMedia)
 lightboxMedia.forEach(elem => (
   elem.addEventListener("click", function (){
       console.log("test")
       displayLightbox()  
      })
   ));
      
}   

init()