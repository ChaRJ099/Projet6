let slideIndex = 0;

function openLightbox() {
  document.querySelector(".lightbox").style.display = "flex";
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".backdrop").style.opacity = "1";
}

function closeLightbox() {
  document.querySelector(".lightbox").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".backdrop").style.opacity = "0";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  slideIndex = n;
  openLightbox();
  showSlides(n);
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

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}
