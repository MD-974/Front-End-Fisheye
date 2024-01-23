import { photographerTemplate } from '../templates/photographer.js'
// recuperation des photographes
async function getPhotographers () {
  const reponsePhotographer = await fetch('data/photographers.json')
  const data = await reponsePhotographer.json()
  return (data)
}

// affiche les photographes
async function displayData (photographers) {
  const photographersSection = document.querySelector('.photographer_section')
  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

// affiche le template pour chaque photographes
async function init () {
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
