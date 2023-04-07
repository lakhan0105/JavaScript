// Event Object
// when we pass the arg for the functions, we may see e, evt
// It is nothing but event object argument - info abt the triggred event
// event.currentTarget
// event.type
// this keyword
// preventDefault() - prevents the default behaviour

const headingEl = document.querySelector("h2"); // sel h2
const btnEl = document.querySelector(".btn"); // sel btn

// log event
headingEl.addEventListener("click", function (event) {
  console.log(event); // returns an object of prop and methods
  console.log(event.currentTarget); // returns the h2 el's html
  console.log(event.type); // returns the type of event performd (this case click event)
});

// change the color of the h2 el using event.currentTarget property
headingEl.addEventListener("click", function (event) {
  event.currentTarget.style.color = "blue"; // turns blue when clicked
});

// preventDefault()
const linkEl = document.querySelector("#link");
linkEl.addEventListener("click", function (e) {
  e.preventDefault(); // link will not nav to the beginning of the page
});

// -------------------------------------------------------------------------------------
// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the el on which the event occured.
const newBtnEl = document.querySelectorAll(".newBtn");

// with current target all the el (inc child el) turns blue
// newBtnEl.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     e.currentTarget.style.color = "blue";
//   });
// });

// with target all the el (only the clicked el turns blue)
newBtnEl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.target.style.color = "blue";
  });
});

// 116. bubbling and capturing [Doubt]
// allows us to sel dynamic elements (allows us to sel items without even sel them)
// Event propogation - order the events are fired
// event bubbling - clicked el 1st then bubbles up - default
// event capturing - fires at the root and fires untill reaches target

const containerEl = document.querySelector(".container");
const list = document.querySelector(".list");

// list.addEventListener("click", function (e) {
//   console.log(`Current target:`, e.currentTarget); // list
//   console.log(`Target`, e.target); // link of the list (item)
// });

// containerEl.addEventListener("click", function (e) {
//   console.log(`Current target:`, e.currentTarget); // list
//   console.log(`Target`, e.target); // link of the list (item)
// });

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    console.log("You have clicked on the link");
  }
});
// Here i target the list, but we selected the link el without even mentioning it
