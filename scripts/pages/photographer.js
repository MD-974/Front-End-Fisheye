// recuperation du photographe selon l'id
export async function getOnePhotographer (id) {
  const reponsePhotographer = await fetch('data/photographers.json')
  const { photographers } = await reponsePhotographer.json()

  // filtre le photographe correspondant à l'id
  let onePhotographe
  photographers.forEach(element => {
    if (element.id === Number(id)) {
      onePhotographe = element
    }
  })
  // renvoie le photographe
  return onePhotographe
}

// recuperation des medias selon l'id du photographe
export async function getOnePhotographerMedia (id) {
  const reponse = await fetch('data/photographers.json')
  const { media } = await reponse.json()
  return media.filter(element => element.photographerId === Number(id))
}
