let slideIndex = 0;

function openLightbox() {
  document.querySelector(".lightbox").style.display = "flex";
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".backdrop").style.opacity = "1";
}

// Utilisée dans html par onclick
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
  document.querySelector(".lightbox").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".backdrop").style.opacity = "0";
}

// Utilisée dans html par onclick
// eslint-disable-next-line no-unused-vars
function plusSlides(n) {
  showSlides((slideIndex += n));
  document.querySelector(".slides[aria-hidden='false']").focus();
}

// Utilisée dans html par onclick
// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  slideIndex = n;
  openLightbox();
  showSlides(n);
  document.querySelector(".lightbox").focus();
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");

  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  //reset
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].setAttribute("aria-hidden", "true");
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].setAttribute("aria-hidden", "false");
}
