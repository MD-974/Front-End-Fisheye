// recuperation du photographe selon l'id
async function getOnePhotographer(id) {
    const reponsePhotographer = await fetch ("data/photographers.json");
    const { photographers } = await reponsePhotographer.json();

    // filtre le photographe correspondant à l'id
    let onePhotographe = undefined;
    photographers.forEach(element => {
        if (element.id == id) {
            onePhotographe = element;
        }  
    });
    // renvoie le photographe
    return onePhotographe;
}

// recuperation des medias selon l'id du photographe
async function getOnePhotographerMedia(id) {
    const reponse = await fetch ("data/photographers.json");
    const { media } = await reponse.json();

    // filtre les medias correspondant à l'id
    let photographeMedia = media.filter( element => {
        if (element.photographerId == id) {
            return element
        }
    })

    // renvoie les medias du photographe selectionne  
    return photographeMedia;
}