// Elements du DOM
const filtres = document.querySelector(".filtres");
const liste = document.querySelector(".filtres--liste");
const options = document.querySelectorAll(".filtres--liste_option");
const filtresBouton = document.querySelector(".button-filter");
const filtresBoutonText = document.querySelector(".button-filter-text");
const iconUp = document.querySelector(".fa-angle-up");
const iconDown = document.querySelector(".fa-angle-down");
const totalOptions = options.length;
let elementFocused = 0;

// Au clique sur l'élément : cache l'icone down, affiche up, affiche les filtres
filtresBouton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  iconUp.classList.remove("hidden");
  iconDown.classList.add("hidden");
  filtres.style.display = "flex";
  filtresBouton.setAttribute("aria-expanded", "true");
  liste.focus();
});

// Au click sur l'option selectionnée : définit l'option sélectionnée, lance le filtrage des media et les affiche filtrés
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
// Interaction au clavier
interactWithListbox();

/**
 * Ecoute les touches clavier au focus dans la liste.
 * Selectionne la bonne action en fonction des touches enfoncées.
 */
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

/**
 * Sélectionne l'élément qui sera focus en fonction du paramètre (index).
 * Permet de gérer l'accessibilité de cet élément.
 * Gère l'accessibilité du bouton de filtres et l'affichage des flèches down et up.
 *
 * @param {*} index
 */
function setElemFocused(index) {
  let elemSelected = document.querySelector(`[data-id="${index}"]`);
  // Retire le focus du précédent élément sélectionné lorsqu'un nouvel élément a été selectionné
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
  iconUp.classList.add("hidden");
  iconDown.classList.remove("hidden");
}

//Permet de cacher les filtres au click en dehors des filtres (sur tout le document)
document.addEventListener("click", (event) => {
  // Rend invisible la liste de filtres si click en dehors de filtres--liste
  if (!event.target.closest(".filtres--liste")) {
    filtres.style.display = "none";
    filtresBouton.setAttribute("aria-expanded", "false");
    iconUp.classList.add("hidden");
    iconDown.classList.remove("hidden");
  }
});

//Au click sur iconUp, cache les filtres
iconUp.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  filtres.style.display = "none";
  filtresBouton.setAttribute("aria-expanded", "false");
  iconUp.classList.add("hidden");
  iconDown.classList.remove("hidden");
});
