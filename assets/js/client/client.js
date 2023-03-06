var slider = tns({
  container: ".my-slider",
  items: 4,
  autoplay: true,
  mouseDrag: true,
  controls: false,
  responsive: {
    350: {
      items: 2,
    },
    992: {
      items: 3,
      gutter: 15,
    },
  },
});
