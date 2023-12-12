function displayData(photographer) {
    const {city, country, name, portrait, price, tagline } = photographer;
    const picture = `assets/Photographers/${portrait}`;

 // Creation "div" informations
    const informations = document.createElement("div");
    informations.setAttribute("class", "onePhotographer_informations");

    const contactButton = document.createElement("div");
    contactButton.setAttribute("class", "onePhotographer_button");

    const photographeImage = document.createElement("div");
    photographeImage.setAttribute("class", "onePhotographer_image");

    
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("class", "onePhotographer_nom");

    const villeText = document.createElement("p");
    villeText.textContent = city + "," + country;
    villeText.setAttribute("class", "onePhotographer_ville");

    const taglineText = document.createElement("p");
    taglineText.textContent = tagline;
    taglineText.setAttribute("class", "onePhotographer_tagline");

    
	const button = document.createElement("button");
    button.textContent = "Contactez-moi";
	button.setAttribute("class", "onePhotographer_button");
    button.addEventListener("click", function () {
        const modal = document.getElementById("contact_modal");
        modal.style.display = "block";
        modal.focus();
        var modalOverlay = document.getElementById("modal-overlay");
        modalOverlay.style.display = "block";
    })

    // const article = document.createElement( 'article' );
    const img = document.createElement( 'img' );
    img.setAttribute("id", "onephotographer_image");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de " + name);
    img.setAttribute("class", "onephotographer_image");
    
    // ajout de article.appendChild pour l'affichage dans l'ordre des elements
    informations.appendChild(h2);
    informations.appendChild(villeText);
    informations.appendChild(taglineText);
    // informations.appendChild(button);

    contactButton.appendChild(button);
    photographeImage.appendChild(img)

    const onePhotographerSection = document.querySelector(".photograph-header");
    onePhotographerSection.appendChild(informations);

    const onePhotographerContact = document.querySelector(".photograph-header");
    onePhotographerContact.appendChild(contactButton);

    const onePhotographerimage = document.querySelector(".photograph-header");
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