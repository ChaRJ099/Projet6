const lightboxModal = document.querySelector("#lightbox-modal");
const imgLightbox = document.querySelector(".lightbox-photo");
const closeLightbox = document.querySelector(".icon-close-lightbox");
const linkImgCard = document.querySelector(".link-img-small");
// const linkVideoCard = document.querySelector(".video-small");

function displayModal(elem) {
  elem.style.display = "block";
}

function closeModal(elem) {
  elem.style.display = "none";
}

imgCard.addEventListener("click", function () {
  displayModal(lightboxModal);
});

// videoCard.addEventListener("click", function () {
//   displayModal(lightboxModal);
// });

closeLightbox.addEventListener("click", function () {
  closeModal(lightboxModal);
});