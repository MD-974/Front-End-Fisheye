function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.getElementById("contact_form").reset();
}

const form = document.getElementById("contact_form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const Resultat = {
        firstname: event.target.elements[0].value,
        lastname: event.target.elements[1].value,
        email: event.target.elements[2].value,
        message: event.target.elements[3].value,
      };
      console.log(Resultat);
    // console.log("le Prénom est : " + event.target.elements[0].value);
    // console.log("le Nom est : " + event.target.elements[1].value);
    // console.log("l'Email est : " + event.target.elements[2].value);
    // console.log("le Message est : " + event.target.elements[3].value);
    closeModal();
})