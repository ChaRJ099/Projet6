const filtres = document.querySelector(".filtres");
const liste = document.querySelector(".filtres--liste");
const options = document.querySelectorAll(".filtres--liste_option");
const filtresBouton = document.querySelector(".button-filter");
const filtresBoutonText = document.querySelector(".button-filter-text");
const up = document.querySelector(".fa-angle-up");
const down = document.querySelector(".fa-angle-down");

const totalOptions = options.length;
let elementFocused = 0;

filtresBouton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("test");
  up.classList.remove("hidden");
  down.classList.add("hidden");
  filtres.style.display = "flex";
  filtresBouton.setAttribute("aria-expanded", "true");
  liste.focus();
});

options.forEach((option, index) => {
  option.dataset.id = index;
  option.addEventListener("click", () => {
    setElemFocused(index);
    elementFocused = index;
    let elemSelected = document.querySelector(`[data-id="${elementFocused}"]`);

    // eslint-disable-next-line no-undef
    displayMedia(mediaToFilter, elemSelected.dataset.value);
    filtres.style.display = "none";
  });
});

// Code RGAA

interactWithListbox();

function interactWithListbox() {
  liste.addEventListener("keydown", (key) => {
    key.preventDefault();

    if (key.code === "Escape") {
      filtres.style.display = "none";
    }

    if (key.code === "Enter" || key.code === "Space") {
      setElemFocused(elementFocused);
      let elemSelected = document.querySelector(
        `[data-id="${elementFocused}"]`
      );
      // eslint-disable-next-line no-undef
      displayMedia(mediaToFilter, elemSelected.dataset.value);
      filtres.style.display = "none";
    }

    if (key.code === "ArrowUp") {
      elementFocused -= 1;
      if (elementFocused < 0) {
        elementFocused = totalOptions - 1;
      }
      setElemFocused(elementFocused);
    }

    if (key.code === "ArrowDown") {
      elementFocused += 1;
      if (elementFocused > totalOptions - 1) {
        elementFocused = 0;
      }
      setElemFocused(elementFocused);
    }
  });
}

function setElemFocused(index) {
  let elemSelected = document.querySelector(`[data-id="${index}"]`);
  if (liste.querySelector('[aria-selected="true"]')) {
    liste.querySelector('[aria-selected="true"]').classList.remove("focused");
    liste
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", "false");
  }

  elemSelected.setAttribute("aria-selected", "true");
  elemSelected.classList.add("focused");
  filtresBoutonText.textContent = elemSelected.textContent;
  filtresBouton.setAttribute("aria-expanded", "false");
  up.classList.add("hidden");
  down.classList.remove("hidden");
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".filtres--liste")) {
    filtres.style.display = "none";
    filtresBouton.setAttribute("aria-expanded", "false");
    up.classList.add("hidden");
    down.classList.remove("hidden");
  }
});

up.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  filtres.style.display = "none";
  filtresBouton.setAttribute("aria-expanded", "false");
  up.classList.add("hidden");
  down.classList.remove("hidden");
});
