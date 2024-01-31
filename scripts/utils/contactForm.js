// ----- AFFICHER MODALE ------
export function displayModal () {
  const modal = document.querySelector('.modal-container')
  modal.showModal() // Affiche le modal
  const modalElements = modal.querySelectorAll('[tabindex]')
  document.getElementById('firstName').focus() // Focus sur le premier élément de la modal

  modal.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
      const firstElement = modalElements[0]
      const lastElement = modalElements[modalElements.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          event.preventDefault()
        }
      } else if (document.activeElement === lastElement) {
        firstElement.focus()
        event.preventDefault()
      }
    }
  })
}
// ----- FERMER MODALE ------
// export function closeModal () {
//   const modal = document.querySelector('.modal-container')
//   modal.close() // Ferme le modal
//   document.getElementById('form-contact').reset()
//   const closeImage = document.querySelector('.close');

//   closeImage.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       modal.close(); // Ferme le modal lorsque la touche "Entrée" est enfoncée sur l'image "close"
//     }
// }}
export function closeModal () {
  const modal = document.querySelector('.modal-container')
  modal.close() // Ferme le modal
  document.getElementById('form-contact_button').reset()
  const closeImage = document.querySelector('.close')

  closeImage.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      modal.close() // Ferme le modal lorsque la touche "Entrée" est enfoncée sur l'image "close"
    }
  })
}

// ----- ENVOYER FORMULAIRE ------
const form = document.getElementById('form-contact')
form.addEventListener('submit', (event) => {
  // Empecher le navigateur de soumettre le formulaire
  event.preventDefault()
  // Récupération des valeurs des champs du formulaire
  const Resultat = {
    firstname: event.target.elements[0].value,
    lastname: event.target.elements[1].value,
    email: event.target.elements[2].value,
    message: event.target.elements[3].value
  }
  // Affichage des valeurs dans la console
  console.log(Resultat)
  // Fermeture de la modale
  closeModal()
})
