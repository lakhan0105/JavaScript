// 110. Click Event

// steps:
// sel the element
// add event listener
// what event, what to do

const btnEl = document.querySelector(".btn");
const heading2El = document.querySelector(".heading2");

btnEl.addEventListener("click", function () {
  heading2El.classList.add("color");
});
