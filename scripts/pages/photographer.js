//Mettre le code JavaScript lié à la page photographer.html
async function getOnePhotographer(id) {
    // recuperation des photographes
    const reponsePhotographer = await fetch ("data/photographers.json");
    const { photographers } = await reponsePhotographer.json();

    // extraction d'un photographe par l id
    let onePhotographe = undefined;
    photographers.forEach(element => {
        if (element.id == id) {
            onePhotographe = element;
        }  
    });
   return onePhotographe;
}
async function getOnePhotographerMedia(id) {
    const reponse = await fetch ("data/photographers.json");
    const { media } = await reponse.json();

    let photographeMedia = media.filter( element => {
        if (element.photographerId == id) {
            return element
        }
    })   
    return photographeMedia;
}