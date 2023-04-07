// event propogation example [DOUBT]
const headingEl = document.querySelector(".heading");
const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");

//

// create a heading dynamically when we click the btn
btnEl.addEventListener("click", function () {
  const newHeading = document.createElement("h2");
  newHeading.classList.add("heading");
  const newHeadingText = "this heading is created dynamically";
  newHeading.append(newHeadingText);
  containerEl.appendChild(newHeading);
});

// hello
// Even though we add the heading class, we are gettting error and no able to acces it
// to solve this we need event prop
headingEl.addEventListener("click", function () {
  console.log("clicked on heading ");
});
