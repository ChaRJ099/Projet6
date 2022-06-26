function slideFactory(data) {
  console.log(data);
  const { id, photographerId, title, image, likes, date, price } = data;

  function getSlideCardDOM() {
    console.log("getLightboxCardDOM");
    const article = document.createElement("article");

    // const lightboxModal = document.querySelector("#lightbox-modal");
    // const imgLightbox = document.querySelector(".lightbox-photo");
    // const closeLightbox = document.querySelector(".icon-close-lightbox");
    // const openLightbox = document.querySelector(".open-lightbox");
    // function displayLightboxModal(elem) {
    //   elem.style.display = "block";
    // }
    // function closeLightboxModal(elem) {
    //   elem.style.display = "none";
    // }
    // imgCard.addEventListener("click", function () {
    //   displayLightboxModal(lightboxModal);
    // });
    // closeLightbox.addEventListener("click", function () {
    //   closeLightboxModal(lightboxModal);
    // });
    return article;
  }
  return { getSlideCardDOM };
}

/*
<div id="myModal" class="lightbox">
      <span class="close cursor" onclick="closeModal()">&times;</span>
      <div class="modal-content">
        <div class="mySlides">
          <img src="img_nature_wide.jpg" style="width: 100%" />
        </div>

        <div class="mySlides">
          <img src="img_snow_wide.jpg" style="width: 100%" />
        </div>

        <div class="mySlides">
          <img src="img_mountains_wide.jpg" style="width: 100%" />
        </div>

        <div class="mySlides">
          <img src="img_lights_wide.jpg" style="width: 100%" />
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
</div>*/
