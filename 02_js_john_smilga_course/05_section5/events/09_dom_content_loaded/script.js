/*
The DOMContentloaded event fires when the initial HTML doc has benn completely loaded and parsed, without waiting for stylesheets, images and subframes to finish loading.

window.addEventListener('DOMContentLoaded',function(){
    // your code here
})

document.addEventListener....
*/

// Lets say u place the script tag and run the below js code (it wont work)
// cuz the js is loading before the html page is even loaded
// if u want ur code to run even though the script is placed in head, we need to use this

// const headingEl = document.querySelector(".heading");
// headingEl.style.color = "red"; // ERROR cannot read prop of null

window.addEventListener("DOMContentLoaded", function () {
  const headingEl = document.querySelector(".heading");
  headingEl.style.color = "red";
  console.log("DOMContentLoaded: I will load first");
});

// load Event -------------------------------------------------------------------------
// loads second
window.addEventListener("load", function () {
  console.log("load: I will load second");
});

// loads first
window.addEventListener("DOMContentLoaded", function () {
  const headingEl = document.querySelector(".heading");
  headingEl.style.color = "red";
  console.log("DOMContentLoaded: I will load first");
});

// scroll event -------------------------------------------------------------------------
/*
- we can listen on the doc or element
window.addEventListener("scroll", function () {
  console.log(window.scrollY + "px");
  console.log(window.scrollX + "px");
});

documet
scrollY - returns the no of pxs the doc is currently scrolled along the vertical axis (pageYOffset)
scrollX - returns the no of pxs the doc is currently scrolled along the hor axis (pageXOffset)
*/

window.addEventListener("scroll", function () {
  console.log("hello"); // 89 hello (no times it will log when scrolled)
  // to know how may px scrolled in y axis
  console.log(window.scrollY);
});
