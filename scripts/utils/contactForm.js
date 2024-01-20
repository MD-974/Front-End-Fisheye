//----- AFFICHER MODALE ------
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}


//----- FERMER MODALE ------
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    var modalOverlay = document.getElementById("modal-overlay");
    modalOverlay.style.display = "none";
    document.getElementById("contact_form").reset();

    
}


//----- ENVOYER FORMULAIRE ------
const form = document.getElementById("contact_form");
form.addEventListener("submit", (event) => {
    // Empecher le navigateur de soumettre le formulaire
    event.preventDefault();
    // Récupération des valeurs des champs du formulaire
    const Resultat = {
        firstname: event.target.elements[0].value,
        lastname: event.target.elements[1].value,
        email: event.target.elements[2].value,
        message: event.target.elements[3].value,
    };
    // Affichage des valeurs dans la console
    console.log(Resultat);
    // Fermeture de la modale
    closeModal();
})