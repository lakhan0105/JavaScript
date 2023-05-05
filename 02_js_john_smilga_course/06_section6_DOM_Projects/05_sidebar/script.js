// Selecting the elements ---------------------------
const closeBtnEl = document.querySelector(".close-btn");
const toggleBtnEl = document.querySelector(".toggle-btn");
const sideContainerEl = document.querySelector(".side-container");

// Close Button ---------------------------------------
closeBtnEl.addEventListener("click", function () {
  if (sideContainerEl.classList.contains("hide")) {
    sideContainerEl.classList.remove("hide");
  } else {
    sideContainerEl.classList.add("hide");
  }
});

// Toggle Button --------------------------------------
toggleBtnEl.addEventListener("click", function () {
  sideContainerEl.classList.toggle("hide");
});
