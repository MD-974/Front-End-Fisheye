import { mediaCardFactoryLightbox } from '../factories/mediaCardFactory.js'

export let lbopen = false // Pour savoir si la lightbox est ouverte

// ----- AFFICHER LIGHTBOX ----

export function displayLightbox (photographerMedia, dataId) {
  console.log('displayLightbox')
  const lightbox = document.querySelector('.lightbox')
  displayMedia(photographerMedia, dataId)
  lightbox.showModal()
  console.log('ouverture de la lightbox')
  lbopen = true
}

// ----- FERMER LIGHTBOX ----
function closeLightbox () {
  const lightbox = document.querySelector('.lightbox')
  lightbox.close()
  console.log('fermeture de la lightbox')
  lbopen = false
}
const closeLightboxBouton = document.getElementById('buttonClose')
console.log(closeLightboxBouton)
closeLightboxBouton.addEventListener('click', closeLightbox)

let index = null
let currentMedia = {}
let mediaList = []
// ----- AFFICHER CONTAINER LIGHTBOX ----

function displayMedia (photographerMedia, dataId) {
  const lightbox = document.querySelector('.lightbox-container-middle')
  mediaList = photographerMedia
  index = mediaList.findIndex(media => media.id === Number(dataId))
  currentMedia = mediaList[index]
  console.log(currentMedia)
  lightbox.innerHTML = mediaCardFactoryLightbox(currentMedia)
}

// ----- NAVIGATION LIGHTBOX ----
export function previous () {
  if (index === 0) {
    index = mediaList.length - 1
  } else {
    index = index - 1
  }
  currentMedia = mediaList[index]
  console.log(currentMedia)
  const lightbox = document.querySelector('.lightbox-container-middle')
  lightbox.innerHTML = mediaCardFactoryLightbox(currentMedia)
  const buttonPrevious = document.getElementById('buttonPrevious')
  buttonPrevious.focus()
}
const buttonPrevious = document.getElementById('buttonPrevious')
buttonPrevious.addEventListener('click', previous)

export function next () {
  if (index >= mediaList.length - 1) {
    index = 0
  } else {
    index = index + 1
  }
  currentMedia = mediaList[index]
  console.log(currentMedia)
  const lightbox = document.querySelector('.lightbox-container-middle')
  lightbox.innerHTML = mediaCardFactoryLightbox(currentMedia)
  const buttonNext = document.getElementById('buttonNext')
  buttonNext.focus()
}
const buttonNext = document.getElementById('buttonNext')
buttonNext.addEventListener('click', next)
buttonNext.focus()
