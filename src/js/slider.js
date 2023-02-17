const usefulSlider = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1
  },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
    disabledClass: "gallery__btn--disabled"
  },
  scrollbar: {
    hide: true
  }
})