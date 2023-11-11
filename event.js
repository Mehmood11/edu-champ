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

// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
window.onload = () => {
  // Once window loaded
  filterItem.onclick = (selectedItem) => {
    //When user clicked on filterItem div
    if (selectedItem.target.classList.contains("all")) {
      // If user click element has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active which is in the first element
      selectedItem.target.classList.add("active"); // add that active class on the user selected element or item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing it in filter name variable
      filterImg.forEach((image) => {
        // console.log(image);
        let filterImages = image.getAttribute("data-name"); //getting image data-name vaue
        // if user seleted item data-name value is equal to main-pagination data-name value
        // or user selected item data-name value is equal to "general"
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
};
