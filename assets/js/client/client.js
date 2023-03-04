var slider = tns({
  container: ".my-slider",
  items: 4,
  autoplay: true,
  controls: false,
  responsive: {
    350: {
      items: 3,
    },
    992: {
      items: 3,
      gutter: 15,
    },
  },
});
