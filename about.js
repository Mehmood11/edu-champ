$(document).ready(function () {
  // Counter
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });

  //   Hamburger

  $(".hamburger").click(function () {
    $(" ul").toggleClass("active");
    $(".hamburger i").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".bottom-header").addClass("active");
    } else {
      $(".bottom-header").removeClass("active");
    }
  });
});

var swiper = new Swiper(".mySwiper-third", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 50,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
