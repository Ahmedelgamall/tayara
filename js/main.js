const showcaseSlider = new Swiper(".home-showcaseSlider", {
    speed: 1000,
    slidesPerView: 1,
    parallax: true,
    // centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".showcaseSlider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.showcaseSlider-next',
      prevEl: '.showcaseSlider-prev',
    },
  });