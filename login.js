$("document").ready(function () {
  //   Hamburger

  $(".hamburger").click(function () {
    $(" ul").toggleClass("active");
    $(".hamburger i").toggleClass("active");
    $(".right-login-form").toggleClass("show");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".bottom-header").addClass("active");
    } else {
      $(".bottom-header").removeClass("active");
    }
  });
});

const btn = document.querySelector(".dropdown");
const box = document.querySelector(".dropdown-content");

btn.addEventListener("onmouse", () => {
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});
