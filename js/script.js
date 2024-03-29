var swiper1 = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination2",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    width: 470,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
