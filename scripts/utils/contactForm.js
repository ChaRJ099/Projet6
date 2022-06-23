const modal = document.getElementById("contact_modal");
const closeForm = document.querySelector(".icon-close-form");
const openForm = document.querySelector(".open-form");

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

// const formData = [
//   {
//     firstName: document.querySelector("#first"),
//   },
//   {
//     lastName: document.querySelector("#last"),
//   },
//   {
//     email: document.querySelector("#email"),
//   },
//   {
//     message: document.querySelector("#message"),
//   },
// ];

// formData.forEach((input) => {
//   let input = formData[input];
//   console.log(input);
//   input.addEventListener("input", function () {
//     console.log(input.value);
//   });
// });
