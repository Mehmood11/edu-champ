$("document").ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      774: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    duration: 3000,
    mouseDrag: false,
    // autoplay: true,
    animateOut: "animate__slideOutDown",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Carousel -2

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
const hamburger = document.querySelector(".hamburger i");
const nav = document.querySelector(".bottom-header-2 ul");
const prevSpan = document.querySelector(".owl-nav button.owl-prev span");
const prev = document.querySelector(".owl-nav button.owl-prev");
const next = document.querySelector(".owl-nav button.owl-next span");
const nextSpan = document.querySelector(".owl-nav button.owl-next");
const btn = document.querySelector(".dropdown");
const box = document.querySelector(".dropdown-content");

btn.addEventListener("onmouse", () => {
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});

// const both = (prev = next);
// prev.addEventListener("click", function () {
//   if ((prev = "clicked")) {
//     nav.addClass("dont-animate");
//   } else {
//     nav.removeClass("dont-animate");
//   }
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 40,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Second
var swiper = new Swiper(".mySwiper-second", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 40,
  //   autoplay: {
  //     delay: 4000,
  //     disableOnInteraction: false,
  //   },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Third
var swiper = new Swiper(".mySwiper-third", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
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

