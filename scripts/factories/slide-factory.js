/**
 * Data représente les valeurs du fichier json
 *
 * @param {*} data
 * @param {*} photographerName
 * @returns
 */
// eslint-disable-next-line no-unused-vars
function slideFactory(data, photographerName) {
  const { title, image, video } = data;

  /**
   * Fonction qui  créer un modèle de slide
   * @returns
   */
  function getSlideCardDOM() {
    const titleSlide = document.createElement("p");
    const slide = document.createElement("div");
    const slideContent = document.querySelector(".lightbox--slide");
    const nameSplited = photographerName.replace(" ", "-");
    titleSlide.textContent = title;
    titleSlide.setAttribute("class", "title-slide");
    slide.setAttribute("class", "slides");
    slide.setAttribute("role", "tabpanel");
    slide.setAttribute("aria-hidden", "true");
    slide.setAttribute("tabindex", "0");

    if (data.image) {
      const imgSlide = document.createElement("img");
      const imgSlideURL = `assets/images/${nameSplited}/${image}`;
      imgSlide.setAttribute("src", imgSlideURL);
      imgSlide.setAttribute("class", "img-slide");
      imgSlide.setAttribute("alt", title);
      slide.appendChild(imgSlide);
    }

    if (data.video) {
      const videoSlideURL = `assets/images/${nameSplited}/${video}`;
      const videoSlide = document.createElement("video");
      const sourceVideo = document.createElement("source");

      videoSlide.setAttribute("controls", "");
      videoSlide.setAttribute("class", "video-slide");
      sourceVideo.setAttribute("src", videoSlideURL);

      videoSlide.appendChild(sourceVideo);
      slide.appendChild(videoSlide);
    }

    slideContent.appendChild(slide);
    slide.appendChild(titleSlide);
    return slide;
  }
  return { getSlideCardDOM };
}
