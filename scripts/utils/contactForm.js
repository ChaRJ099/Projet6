const modal = document.getElementById("contact_modal");
const closeForm = document.querySelector(".icon-close-form");
const openForm = document.querySelector(".open-form");
const submitButton = document.querySelector(".submit-button");

function displayModal(elem) {
  elem.style.display = "block";
}

function closeModal(elem) {
  elem.style.display = "none";
}

openForm.addEventListener("click", function () {
  displayModal(modal);
});

closeForm.addEventListener("click", function () {
  closeModal(modal);
});

submitButton.addEventListener("click", function () {
  closeModal(modal);
});

//Form DOM elements
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

firstName.addEventListener("input", function () {
  console.log(this.value);
});

lastName.addEventListener("input", function () {
  console.log(this.value);
});

email.addEventListener("input", function () {
  console.log(this.value);
});

message.addEventListener("input", function () {
  console.log(this.value);
});
