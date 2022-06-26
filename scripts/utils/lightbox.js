let slideIndex = 0;

function openModal() {
  document.querySelector("#myModal").style.display = "block";
}

function closeModal() {
  document.querySelector("#myModal").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  slideIndex = n;
  openModal();
  showSlides(n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");

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
