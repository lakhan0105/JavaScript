// Selecting the elements
const videoEl = document.querySelector(".video-container");
const btn = document.querySelector(".checkbox-input");
let count = 0;
btn.addEventListener("click", function () {
  count++;
  if (count === 1) {
    videoEl.pause();
  } else {
    count = 0;
    videoEl.play();
  }
});
