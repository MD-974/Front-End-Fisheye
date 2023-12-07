//Mettre le code JavaScript lié à la page photographer.html

// Récupere l'id de l'url
const paramsUrl = new URLSearchParams(window.location.search);
const id = paramsUrl.get("id");
console.log (id)