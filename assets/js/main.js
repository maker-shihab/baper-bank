document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);
});
