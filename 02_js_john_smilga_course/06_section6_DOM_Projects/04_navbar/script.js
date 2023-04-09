// Selecting the elements
const toggleBtnEl = document.querySelector(".nav-toggle");
const linksEl = document.querySelector(".links");
const navCenter = document.querySelector(".nav-center");

// Event Listener when clicked on toggle btn
toggleBtnEl.addEventListener("click", function () {
  linksEl.classList.toggle("hide");
});

// Note:
// You need to set the height of .links {height:auto}(media query), else the links part will not appear above min:800px
