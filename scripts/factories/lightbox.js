function lightboxFactory(data) {
  const { id, photographerId, title, image, likes, date, price } = data;

  function displayLightbox() {
    const lightboxModal = document.querySelector("#lightbox-modal");
    const imgLightbox = document.querySelector(".lightbox-photo");
    const closeLightbox = document.querySelector(".icon-close-lightbox");
    const openLightbox = document.querySelector(".open-lightbox");

    function displayLightboxModal(elem) {
      elem.style.display = "block";
    }

    function closeLightboxModal(elem) {
      elem.style.display = "none";
    }

    imgCard.addEventListener("click", function () {
      displayLightboxModal(lightboxModal);
    });

    closeLightbox.addEventListener("click", function () {
      closeLightboxModal(lightboxModal);
    });
  }
  return { displayLightbox };
}
