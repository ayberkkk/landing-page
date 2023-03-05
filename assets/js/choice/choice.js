var slider = tns({
  container: ".choice-slider",
  items: 3,
  autoplay: true,
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
