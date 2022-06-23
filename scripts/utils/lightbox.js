const lightboxModal = document.querySelector("#lightbox-modal");
const imgLightbox = document.querySelector(".lightbox-photo");
const closeLightbox = document.querySelector(".icon-close-lightbox");

function displayModal(elem) {
  elem.style.display = "block";
}

function closeModal(elem) {
  elem.style.display = "none";
}

closeLightbox.addEventListener("click", function () {
  closeModal(lightboxModal);
});
