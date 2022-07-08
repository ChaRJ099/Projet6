// Elements du DOM
const modal = document.querySelector("#contact_modal");
const modalContent = document.querySelector(".modal");
const closeForm = document.querySelector(".button-close-form");
const openForm = document.querySelector(".open-form");
const submitButton = document.querySelector(".submit-button");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".input-contact");

//au clic sur openForm, ouvre la modale
openForm.addEventListener("click", function () {
  displayModal(modal);
});

//au clic sur closeForm, ferme la modale
closeForm.addEventListener("click", function () {
  closeModal(modal);
  form.reset();
});

//au clic sur submitButton, console.log les valeurs des inputs
submitButton.addEventListener("click", function () {
  inputs.forEach((input) => {
    console.log(input.value);
  });
});

/**
 * Fonction qui gère l'apparition de la modale et du backdrop
 *
 * @param {*} elem
 */
function displayModal(elem) {
  elem.style.display = "flex";
  backdrop.style.display = "block";
  backdrop.style.opacity = "1";
  modalContent.focus();
}

/**
 * Fonction qui gère la disparition de la modale et du backdrop
 *
 * @param {*} elem
 */
function closeModal(elem) {
  elem.style.display = "none";
  backdrop.style.display = "none";
  backdrop.style.opacity = "0";
}
