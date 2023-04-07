// Mouse events
// mousedown - button is pressed
// mouseup - button is released
// click - fires when full action occurs
// mouseenter - moved onto an element
// mouseleave - moved out of the element

// select the element
const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

// click event
btn.addEventListener("click", function () {
  console.log("clicked ");
});

// mousedown
btn.addEventListener("mousedown", function () {
  console.log("clicked mousedown");
});

// mouseup
btn.addEventListener("mouseup", function () {
  console.log("clicked mouseup");
});

// mouseenter
btn.addEventListener("mouseenter", function () {
  console.log("you moved onto an element (moveenter)");
});

// mouseleave
btn.addEventListener("mouseleave", function () {
  console.log("you moved out of an element (moveleave)");
});
