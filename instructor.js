const links_btn = document.querySelectorAll(".icons-text");
links_btn.forEach((links) => {
  links.addEventListener("click", function () {
    links_btn.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

$(document).ready(function () {
  $(".icons-text").click(function () {
    $(".target").hide();
    $(".right-instructor-" + $(this).attr("target")).show();
    $("#left-instructor-bottom-" + $(this)).classList.add("active");
  });

  $(".right-instructor-2").hide();
  $(".right-instructor-3").hide();
  $(".right-instructor-4").hide();
  // Validation
  $("#usercheck").hide();
  var user_err = true;

  $("#username").keyup(function () {
    username_check();
  });

  function username_check() {
    var user_val = $("#username").val();
    if (user_val.length == "") {
      $("#usercheck").show();
      $("#usercheck").html(`**Please Fill the Username`);
      $("#usercheck").focus();
      $("#usercheck").css("color", "red"),
        $("#usercheck").css("font-size", "12px");
      user_err = false;
      return false;
    } else {
      $("#usercheck").hide();
    }

    if (user_val.length < 3 || user_val.length > 10) {
      $("#usercheck").show();
      $("#usercheck").html(`**Username length must be between 3 and 10`);
      $("#usercheck").focus();
      $("#usercheck").css("color", "red");
      user_err = false;
      return false;
    } else {
      $("#usercheck").hide();
    }
    if (user_val.length > 3) {
      $("#username").addClass("green");
    } else {
      $("#username").removeClass("green");
    }
  }

  $("#btn").click(function () {
    user_err = true;

    username_check();

    if (user_err == true) {
      return true;
    } else {
      return false;
    }
  });
});

// Selecting all required elements
const filterItem = document.querySelector(".all-courses ul");
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
        // or user selected item data-name value is equal to "all"
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
