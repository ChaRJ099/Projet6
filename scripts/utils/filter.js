const filtres = document.querySelector(".filtres");
const liste = document.querySelector(".filtres--liste");
const options = document.querySelectorAll(".filtres--liste_option");
const filtresBouton = document.querySelector(".bouton-filter");

const totalOptions = options.length;
let elementFocused = 0;

filtresBouton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  filtres.style.display = "flex";
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
  filtresBouton.textContent = elemSelected.textContent;
}

// document.querySelector("body").addEventListener("click", (event) => {
//   console.log("event.target.class");
//   console.log(event.target.class === "filtres");

//   if (filtres.style.display === "flex") {
//     filtres.style.display = "none";
//   }
// });
document.addEventListener("click", (event) => {
  if (!event.target.closest(".filtres")) {
    filtres.style.display = "none";
  }
});
