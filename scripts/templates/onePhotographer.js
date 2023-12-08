
// Creation "div" informations
const informations = document.createElement("div");
informations.setAttribute("class", "onePhotographer_information");

const h2 = document.createElement("h2");
h2.textContent = name;
h2.setAttribute("class", "onePhotographer_nom");

const villeText = document.createElement("p");
villeTextText.textContent = city + "," + country;
villeText.setAttribute("class", "onePhotographer_ville");

const taglineText = document.createElement("p");
taglineText.textContent = tagline;
taglineText.setAttribute("class", "onePhotographer_tagline");

// ajout de article.appendChild pour l'affichage dans l'ordre des elements
informations.appendChild(h2);
informations.appendChild(villeText);
informations.appendChild(taglineText);