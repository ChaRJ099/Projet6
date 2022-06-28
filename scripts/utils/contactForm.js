const modal = document.getElementById("contact_modal");
const closeForm = document.querySelector(".icon-close-form");
const openForm = document.querySelector(".open-form");
const submitButton = document.querySelector(".submit-button");

// const namePhotograph = document.querySelector(".gallery-title");
console.log(photographerName);

function displayModal(elem) {
  elem.style.display = "flex";
}

function closeModal(elem) {
  elem.style.display = "none";
}

openForm.addEventListener("click", function () {
  displayModal(modal);
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".backdrop").style.opacity = "1";
});

closeForm.addEventListener("click", function () {
  closeModal(modal);
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".backdrop").style.opacity = "0";
  form.reset();
});

submitButton.addEventListener("click", function () {
  closeModal(modal);
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".backdrop").style.opacity = "0";
  form.reset();
});

//Form DOM elements
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

firstName.addEventListener("input", function () {
  setTimeout(() => {
    console.log(this.value);
  }, 1000);
});

lastName.addEventListener("input", function () {
  setTimeout(() => {
    console.log(this.value);
  }, 1000);
});

email.addEventListener("input", function () {
  setTimeout(() => {
    console.log(this.value);
  }, 1000);
});

message.addEventListener("input", function () {
  setTimeout(() => {
    console.log(this.value);
  }, 1000);
});
