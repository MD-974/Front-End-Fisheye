async function displayData(photographer) {
    const {city, country, name, tagline } = photographer;

    // Creation "div" informations
    const informations = document.createElement("div");
    informations.setAttribute("class", "onePhotographer_information");

    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("class", "onePhotographer_nom");

    const villeText = document.createElement("p");
    villeText.textContent = city + "," + country;
    villeText.setAttribute("class", "onePhotographer_ville");

    const taglineText = document.createElement("p");
    taglineText.textContent = tagline;
    taglineText.setAttribute("class", "onePhotographer_tagline");

    // ajout de article.appendChild pour l'affichage dans l'ordre des elements
    informations.appendChild(h2);
    informations.appendChild(villeText);
    informations.appendChild(taglineText);

    const onePhotographerSection = document.querySelector(".photograph-header");
    onePhotographerSection.appendChild(informations);

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

init();