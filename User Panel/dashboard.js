$(document).ready(function () {
  $(".search").click(function () {
    $(".search-bar").css("display", "flex");
  });

  $(".search-bar i").click(function () {
    $(".search-bar").css("display", "none");
  });

  $(".grid i").click(function () {
    $(".grid-section").toggleClass("active");
  });
  $(".bell i").click(function () {
    $(".notification").toggleClass("active");
  });
  $(".account").click(function () {
    $(".account-section").toggleClass("active");
  });

  $("#calendar").evoCalendar({
    theme: "linear-gradient(rgba(103, 58, 183, 0.5), rgba(33, 150, 243, 0.8));",
    calendarEvents: [
      {
        id: "Event1", // Event's ID (required)
        name: "APL", // Event name (required)
        description: "AppTech Premier League Started on 18 Dec 2021",
        date: "December/18/2021", // Event date (required)
        type: "holiday", // Event type (required)
        //   everyYear: true, // Same event every year (optional)
      },
      {
        id: "Event2", // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2020", // Event date (required)
        description:
          "The heart touching greetings will make feel anyone very special. Wish your near and dear one with our special greetings.",
        type: "holiday", // Event type (required)
        everyYear: true, // Same event every year (optional)
      },
      {
        name: "Vacation Leave",
        badge: "02/13 - 02/15", // Event badge (optional)
        date: ["February/13/2020", "February/15/2020"], // Date range
        description: "Vacation leave for 3 days.", // Event description (optional)
        type: "event",
        color: "#63d867", // Event custom color (optional)
      },
    ],
  });
});

let arrow = document.querySelectorAll(".arrow");
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    console.log(arrowParent);
    arrowParent.classList.toggle("showMenu");
  });
}
let arrow1 = document.querySelectorAll(".arrow1");
for (let i = 0; i < arrow1.length; i++) {
  arrow1[i].addEventListener("click", (e) => {
    console.log(e);
    let arrowParent1 = e.target.parentElement.parentElement;
    console.log(arrowParent1);
    arrowParent1.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  // document.querySelector(".second-img").style.display = "block";
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    sidebar.classList.add("close");
  }
}

var x = window.matchMedia("(max-width: 579px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

//
