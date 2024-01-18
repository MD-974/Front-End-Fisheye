function mediaCardFactory (media,objPhotographerMedias ) {
    // div conteneur "contient les informations (image,titre,like,coeur) 
    // pour chaques medias (images/videos) d'un photographe"
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
        mediasImage.style.objectFit = "cover";
        mediasCard.append(mediasImage);
    } else if (media.video) {
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
    // mediasTitre.style.color = "#901C1C";
    // mediasTitre.style.fontWeight = "400";
    // mediasTitre.setAttribute("font-size", "24px");
    mediasInfos.appendChild(mediasTitre);

    const mediasLikeWrapper = document.createElement ("div");
    mediasLikeWrapper.setAttribute("class", "onephotographer_medias-likes-wrapper");
    mediasLikeWrapper.style.display = "flex";
    mediasLikeWrapper.style.gap ="10px";
    // mediasLikeWrapper.style.background = "lightyellow"

    // element "like du media(image ou video)"
    const mediaslike = document.createElement ("p");
    mediaslike.textContent = media.likes;
    // mediaslike.style.color = "#901C1C";
    // mediaslike.style.fontWeight = "500";
    // mediaslike.setAttribute("font-size", "24px");
    mediasLikeWrapper.appendChild(mediaslike);

    // element "coeur du media(image ou video)"
    const mediasCoeur = document.createElement ("i");
    if (media.islike) {
        mediasCoeur.setAttribute("class", "fa-regular fa-heart fas" );
    }else {
        mediasCoeur.setAttribute("class", "fa-regular fa-heart far" );
    }

    mediasCoeur.style.color = "#901C1C";
    mediasLikeWrapper.appendChild(mediasCoeur);
    
    //  Ajout d'un eventlistener sur le coeur plus incrementation et decrementation du like
    mediasCoeur.addEventListener("click", function() {
        if (mediasCoeur.classList.contains("fas")) {
            mediasCoeur.classList.remove("fas");
            mediasCoeur.classList.add("far");
            media.likes = media.likes - 1;
            media.islike = false
            mediaslike.textContent = media.likes;
            mediasCard.dispatchEvent(new Event("updateLikes"));
            console.log("vous avez dislike ce media : " + media.title);
        } else {
            mediasCoeur.classList.remove("far");
            mediasCoeur.classList.add("fas");
            media.likes = media.likes + 1;
            media.islike = true
            mediaslike.textContent = media.likes;  
            mediasCard.dispatchEvent(new Event("updateLikes"));
            console.log("vous avez like ce media : " + media.title); 
        }

        let compteur = 0
        objPhotographerMedias.forEach(element => {
         compteur = compteur + Number(element.likes)  
        });
        console.log( "Total de like : " + compteur)
        
        
        icone_coeur = "<i class='fa-coeur-un-truc-comme-ca'></i>"
        document.querySelector('.onephotographer_coeur-text').innerHTML = conteur + icone_coeur
        // document.querySelector('.onephotographer_coeur-text').innerHTML = compteur



    });


    mediasCard.appendChild(mediasInfos);
    mediasInfos.appendChild(mediasLikeWrapper)

    return {mediasCard }
}