$(document).ready(function () {
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
