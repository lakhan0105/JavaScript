// Selecting the elements
const incrementBtn = document.querySelector(".increment");

// counter
const counter = {
  count: 0,
  increment: function () {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

// Edge cases
// incrementBtn.addEventListener("click", counter.increment.bind(counter));

// Another way
const increment = counter.increment.bind(counter); // refernece to this
incrementBtn.addEventListener("click", increment);
// by this way we can also rmeove the eventListener
// incrementBtn.removeEventListener("click", increment);
