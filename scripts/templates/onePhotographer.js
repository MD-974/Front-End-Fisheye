function displayData(photographer) {
    const {city, country, name, portrait, price, tagline } = photographer;
    const picture = `assets/Photographers/${portrait}`;


 // Creations de 4 "div" 
    // "div" container
    const container = document.createElement("div");
    container.setAttribute("class", "onePhotographer_container");
    // "div" informations
    const informations = document.createElement("div");
    informations.setAttribute("class", "onePhotographer_informations");
    // "div" contactButton
    const contactButton = document.createElement("div");
    contactButton.setAttribute("class", "onePhotographer_button");
    // "div" photographeImage
    const photographeImage = document.createElement("div");
    photographeImage.setAttribute("class", "onePhotographer_image");


 // Creations des elements
    // element "name"
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("class", "onePhotographer_nom");
    // element "city+country"
    const villeText = document.createElement("p");
    villeText.textContent = city + "," + country;
    villeText.setAttribute("class", "onePhotographer_ville");
    // element "tagline"
    const taglineText = document.createElement("p");
    taglineText.textContent = tagline;
    taglineText.setAttribute("class", "onePhotographer_tagline");
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
    // element "picture"
    const img = document.createElement( 'img' );
    img.setAttribute("id", "onephotographer_image");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de " + name);
    img.setAttribute("class", "onephotographer_image");

    

 // ajout de 'article.appendChild' pour la "div" informations
    informations.appendChild(h2);
    informations.appendChild(villeText);
    informations.appendChild(taglineText);
 // ajout de 'article.appendChild' pour la "div" contactButton
    contactButton.appendChild(button);
 // ajout de 'article.appendChild' pour la "div" photographeImage
    photographeImage.appendChild(img);


    const onePhotographerContainer = document.querySelector(".photograph-header");
    onePhotographerContainer.appendChild(container);

    const onePhotographerSection = document.querySelector(".onePhotographer_container");
    onePhotographerSection.appendChild(informations);

    const onePhotographerContact = document.querySelector(".onePhotographer_container");
    onePhotographerContact.appendChild(contactButton);

    const onePhotographerimage = document.querySelector(".onePhotographer_container");
    onePhotographerimage.appendChild(photographeImage);
   

}

async function init() {
 // Récuperation de l'id de l'url
    const paramsUrl = new URLSearchParams(window.location.search);
    const id = paramsUrl.get("id");
    console.log (id);

 // Récupère les datas d'un photographe
    const dataOnePhotographe  = await getOnePhotographer(id);
    console.log(dataOnePhotographe)
    displayData(dataOnePhotographe);
}   

init()