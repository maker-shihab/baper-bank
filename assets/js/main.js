document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: .8,
    },
  }).mount(window.splide.Extensions);
});
document.addEventListener("DOMContentLoaded", function () {
  var splideTwo = new Splide(".splideTwo", {
    type: "loop",
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    focus: "center",
    autoScroll: {
      speed: .8,
    },
  }).mount(window.splideTwo.Extensions);
});
