let slideIndex = 0;
const lightbox = document.querySelector(".lightbox");

// Quand openLightbox est activée, les blocs lightbox et backdrop sont visibles
function openLightbox() {
  document.querySelector(".lightbox").style.display = "flex";
  document.querySelector(".backdrop").style.display = "block";
  document.querySelector(".backdrop").style.opacity = "1";
}

// Quand closeLightbox est activée, les blocs lightbox et backdrop sont invisibles
// Utilisée dans html par onclick
// eslint-disable-next-line no-unused-vars
function closeLightbox() {
  document.querySelector(".lightbox").style.display = "none";
  document.querySelector(".backdrop").style.display = "none";
  document.querySelector(".backdrop").style.opacity = "0";
}

// Event quand une touche du clavier est enfoncée
lightbox.addEventListener("keydown", (key) => {
  // Si la touche enfoncée est flèche gauche, applique fonction plusSlide -1
  if (key.code === "ArrowLeft") {
    plusSlides(-1);
  }
  // Si la touche enfoncée est flèche droite, applique fonction plusSlide +1
  if (key.code === "ArrowRight") {
    plusSlides(1);
  }
});

/**
 * Permet de passer à la slide suivante ou précédente en fonction du paramètre (n)
 * Utilisée dans html par onclick
 *
 * @param {*} n
 */
function plusSlides(n) {
  showSlides((slideIndex += n));
  document.querySelector(".slides[aria-hidden='false']").focus();
}

/**
 * Permet de lancer la lightbox au click sur une image de la galerie
 * Utilise le paramètre (n) comme index de l'image
 * Utilisée dans html par onclick
 *
 * @param {*} n
 *
 */
// eslint-disable-next-line no-unused-vars
function currentSlide(n) {
  slideIndex = n;
  openLightbox();
  showSlides(n);
  document.querySelector(".lightbox").focus();
}

/**
 * Permet de rendre visible la bonne slide
 *
 * @param {*} n
 *
 */
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
