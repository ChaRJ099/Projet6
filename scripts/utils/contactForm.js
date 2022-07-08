const modal = document.querySelector("#contact_modal");
const modalContent = document.querySelector(".modal");
const closeForm = document.querySelector(".button-close-form");
const openForm = document.querySelector(".open-form");
const submitButton = document.querySelector(".submit-button");
const backdrop = document.querySelector(".backdrop");
const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".input-contact");

openForm.addEventListener("click", function () {
  displayModal(modal);
});

closeForm.addEventListener("click", function () {
  closeModal(modal);
  form.reset();
});

submitButton.addEventListener("click", function () {
  inputs.forEach((input) => {
    console.log(input.value);
  });
});

function displayModal(elem) {
  elem.style.display = "flex";
  backdrop.style.display = "block";
  backdrop.style.opacity = "1";
  modalContent.focus();
}

function closeModal(elem) {
  elem.style.display = "none";
  backdrop.style.display = "none";
  backdrop.style.opacity = "0";
}
