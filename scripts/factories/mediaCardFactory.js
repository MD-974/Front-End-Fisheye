/***************************************************************
 * Fonction qui crée une carte média pour afficher
 * les images ou vidéos d'un photographe
 * avec leurs informations associées (titre, likes, coeur).
****************************************************************/
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
    mediasImage.setAttribute('tabindex', '0')
    mediasImage.setAttribute('aria-label', 'image closeup view')

    // Ajout de l'attribut "data-id" pour pouvoir le retrouver
    mediasImage.dataset.id = media.id
    mediasCard.append(mediasImage)
  } else if (media.video) {
    // Création de l'élément video
    const mediasVideo = document.createElement('video')
    mediasVideo.setAttribute('controls', 'controls')
    mediasVideo.setAttribute('class', 'onephotographer_imageMedias')
    mediasVideo.setAttribute('tabindex', '0')
    mediasVideo.setAttribute('alt', 'Video de : ' + media.title)

    // Création de la source vidéo
    const videoSource = document.createElement('source')
    // Définition de l'URL de la vidéo
    const urlVideo = `assets/medias/${media.video}`
    videoSource.setAttribute('src', urlVideo)
    videoSource.setAttribute('type', 'video/mp4')

    // Création de la balise <track> pour les sous-titres
    // const track = document.createElement('track')
    // track.setAttribute('kind', 'subtitles')
    // track.setAttribute('src', `assets/sous-titres/${media.video}.vtt`) // URL du fichier de sous-titres
    // track.setAttribute('default', 'default') // Activer les sous-titres par défaut

    // Ajout de l'attribut "data-id" pour pouvoir le retrouver
    mediasVideo.dataset.id = media.id

    mediasVideo.append(videoSource)
    mediasCard.append(mediasVideo)
    // mediasVideo.append(track) // Ajout du track à l'élément vidéo
  }

  // Création de la div qui contient les informations du media
  const mediasInfos = document.createElement('div')
  mediasInfos.setAttribute('class', 'onephotographer_medias-infos')
  mediasInfos.style.display = 'flex'
  mediasInfos.style.alignItems = 'center'
  mediasInfos.style.justifyContent = 'space-between'

  // Création "Titre du media(image ou video)"
  const mediasTitre = document.createElement('h4')
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
  mediasCoeur.setAttribute('aria-label', 'likes')
  mediasCoeur.dataset.id = media.id
  mediasCoeur.setAttribute('tabindex', '0')
  if (media.islike) {
    mediasCoeur.setAttribute('class', 'icon__coeur fa-regular fa-heart fas')
  } else {
    mediasCoeur.setAttribute('class', 'icon__coeur fa-regular fa-heart far')
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

/***************************************************************
 * Fonction qui génère une carte média
 * pour l'affichage de la lightbox en fonction du média actuel.
 ***************************************************************/
export function mediaCardFactoryLightbox (currentMedia) {
  // Initialiser l'élément média
  let elementMedia = ''
  console.log(currentMedia)

  // Vérifier si le média actuel est une vidéo
  if (typeof currentMedia.video !== 'undefined') {
    // Générer l'élément video
    elementMedia += '<figure class="lb-media">'
    elementMedia += `<video controls src="assets/medias/${currentMedia.video}" alt="${currentMedia.title}" class="lb-video-image">`
    elementMedia += `<source src="assets/medias/${currentMedia.video}" type="video/mp4">`
    elementMedia += '</video>'
    elementMedia += '<figcaption class="lb-media-title">' + currentMedia.title + '</figcaption>'
    elementMedia += '</figure>'
  } else {
    // Si l'élement medias n'est pas une video
    // Générer l'élément image
    elementMedia += '<figure class="lb-media">'
    elementMedia += `<img src="assets/medias/${currentMedia.image}" alt="${currentMedia.title}" class="lb-video-image">`
    elementMedia += '<figcaption class="lb-media-title">' + currentMedia.title + '</figcaption>'
    elementMedia += '</figure>'
  }

  // Retourner l'élément média généré
  return elementMedia
}
