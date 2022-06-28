// eslint-disable-next-line no-unused-vars
function slideFactory(data, photographerName) {
  const { title, image, video } = data;

  function getSlideCardDOM() {
    const titleSlide = document.createElement("span");
    const slide = document.createElement("div");
    const slideContent = document.querySelector(".lightbox--slide");

    titleSlide.textContent = title;
    titleSlide.setAttribute("class", "title-slide");
    slide.setAttribute("class", "slides");

    if (data.image) {
      const imgSlide = document.createElement("img");
      const imgSlideURL = `assets/images/${photographerName}/${image}`;
      console.log(photographerName);
      imgSlide.setAttribute("src", imgSlideURL);
      imgSlide.setAttribute("class", "img-slide");

      slide.appendChild(imgSlide);
    }

    if (data.video) {
      const videoSlideURL = `assets/images/${photographerName}/${video}`;
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
