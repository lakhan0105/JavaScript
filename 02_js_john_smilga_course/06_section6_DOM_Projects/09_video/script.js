// Selecting the elements
const videoEl = document.querySelector(".video-container");
const btn = document.querySelector(".checkbox-input");
const preLoaderEl = document.querySelector(".preloader");
let count = 0;

// Event Listener to play and pause
btn.addEventListener("click", function () {
  count++;
  if (count === 1) {
    videoEl.pause();
  } else {
    count = 0;
    videoEl.play();
  }
});

// load event
// add hide class when the page loads and show other contents
window.addEventListener("load", function () {
  preLoaderEl.classList.add("hide-preloader");
});
