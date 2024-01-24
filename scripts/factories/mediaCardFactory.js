/**
 * Fonction crée une carte média pour afficher
 * les images ou vidéos d'un photographe
 * avec leurs informations associées (titre, likes, coeur).
 * @param {Object} media - Les informations sur le média à afficher (image ou vidéo).
 * @param {Array} objPhotographerMedias - La liste des médias du photographe.
 * @returns {Object} - Retourne la carte média créée.
*/

export function mediaCardFactory (media, objPhotographerMedias) {
  // Création de la carte média
  const mediasCard = document.createElement('div')
  mediasCard.setAttribute('class', 'onephotographer_media-card')

  // Création de l'image si c'est une image,
  // ou de la vidéo si c'est une vidéo
  if (media.image) {
    // Création de l'élément image
    const mediasImage = document.createElement('img')
    // Définition de l'URL de l'image
    const urlImage = `assets/medias/${media.image}`
    mediasImage.setAttribute('src', urlImage)
    mediasImage.setAttribute('class', 'onephotographer_imageMedias')
    mediasImage.setAttribute('alt', 'Image de : ' + media.title)
    mediasImage.setAttribute('width', '350px')
    mediasImage.setAttribute('height', '300px')
    mediasImage.style.borderRadius = '5px'
    mediasImage.style.objectFit = 'cover'
    // Ajout de l'attribut "data-id" pour pouvoir le retrouver
    mediasImage.dataset.id = media.id
    mediasCard.append(mediasImage)
  } else if (media.video) {
    // Création de l'élément video
    const mediasVideo = document.createElement('video')
    mediasVideo.setAttribute('controls', 'controls')
    mediasVideo.setAttribute('class', 'onephotographer_imageMedias')
    mediasVideo.setAttribute('alt', 'Video de : ' + media.title)
    mediasVideo.setAttribute('width', '350px')
    mediasVideo.setAttribute('height', '300px')
    mediasVideo.style.borderRadius = '5px'
    mediasVideo.style.objectFit = 'cover'
    // Création de la source vidéo
    const videoSource = document.createElement('source')
    // Définition de l'URL de la vidéo
    const urlVideo = `assets/medias/${media.video}`
    videoSource.setAttribute('src', urlVideo)
    videoSource.setAttribute('type', 'video/mp4')
    // Ajout de l'attribut "data-id" pour pouvoir le retrouver
    mediasVideo.dataset.id = media.id
    mediasVideo.append(videoSource)
    mediasCard.append(mediasVideo)
  }

  // Création de la div qui contient les informations du media
  const mediasInfos = document.createElement('div')
  mediasInfos.setAttribute('class', 'onephotographer_medias-infos')
  mediasInfos.style.display = 'flex'
  mediasInfos.style.alignItems = 'center'
  mediasInfos.style.justifyContent = 'space-between'

  // Création "Titre du media(image ou video)"
  const mediasTitre = document.createElement('h3')
  mediasTitre.textContent = media.title
  mediasInfos.appendChild(mediasTitre)

  // Création du wrapper des likes du média
  const mediasLikeWrapper = document.createElement('div')
  mediasLikeWrapper.setAttribute('class', 'onephotographer_medias-likes-wrapper')
  mediasLikeWrapper.style.display = 'flex'
  mediasLikeWrapper.style.gap = '10px'

  // Création "likes du media(image ou video)"
  const mediaslike = document.createElement('span')
  mediaslike.textContent = media.likes
  mediasLikeWrapper.appendChild(mediaslike)

  // Création "coeur du media(image ou video)"
  const mediasCoeur = document.createElement('i')
  if (media.islike) {
    mediasCoeur.setAttribute('class', 'fa-regular fa-heart fas')
  } else {
    mediasCoeur.setAttribute('class', 'fa-regular fa-heart far')
  }
  mediasCoeur.style.color = '#901C1C'
  mediasLikeWrapper.appendChild(mediasCoeur)

  // Ajout d'un event listener sur le coeur pour incrémenter/décrémenter le like
  mediasCoeur.addEventListener('click', function () {
    if (mediasCoeur.classList.contains('fas')) {
      mediasCoeur.classList.remove('fas')
      mediasCoeur.classList.add('far')
      // Diminution du nombre de likes
      media.likes = media.likes - 1
      // Changement de l'attribut
      media.islike = false
      mediaslike.textContent = media.likes
      console.log('vous avez dislike ce media : ' + media.title)
    } else {
      mediasCoeur.classList.remove('far')
      mediasCoeur.classList.add('fas')
      // Augmentation du nombre de likes
      media.likes = media.likes + 1
      // Changement de l'attribut
      media.islike = true
      mediaslike.textContent = media.likes
      console.log('vous avez like ce media : ' + media.title)
    }
    // Calcul du total de likes
    let compteur = 0
    // Boucle de calcul du total de likes
    objPhotographerMedias.forEach(element => {
      compteur = compteur + Number(element.likes)
    })
    console.log('Total de like : ' + compteur)
    // Mise à jour du compteur
    document.querySelector('#compteur-likes').innerHTML = compteur
  })

  // Ajout des elements dans la div du media
  mediasCard.appendChild(mediasInfos)
  mediasInfos.appendChild(mediasLikeWrapper)

  return { mediasCard }
}

export function mediaCardFactoryLightbox (currentMedia) {
  let elementMedia = ''
  console.log(currentMedia)
  if (typeof currentMedia.video !== 'undefined') {
    elementMedia += '<figure class="lb-media">'
    elementMedia += `<video controls src="assets/medias/${currentMedia.video}" alt="${currentMedia.title}" class="lb-video-image">`
    elementMedia += `<source src="assets/medias/${currentMedia.video}" type="video/mp4">`
    elementMedia += '</video>'
    elementMedia += '<figcaption class="lb-media-title">' + currentMedia.title + '</figcaption>'
    elementMedia += '</figure>'
  } else {
    elementMedia += '<figure class="lb-media">'
    elementMedia += `<img src="assets/medias/${currentMedia.image}" alt="${currentMedia.title}" class="lb-video-image">`
    elementMedia += '<figcaption class="lb-media-title">' + currentMedia.title + '</figcaption>'
    elementMedia += '</figure>'
  }

  return elementMedia
}
