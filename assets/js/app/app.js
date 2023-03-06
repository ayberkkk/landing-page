var slider = tns({
  container: ".ss-slider-img",
  items: 5,
  autoplay: true,
  mouseDrag: true,
  controls: false,
  responsive: {
    350: {
      items: 1,
    },
    992: {
      items: 5,
      gutter: 15,
    },
  },
});
