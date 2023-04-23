// Constructor function *****************************************************************
const Counter = function (element, value) {
  this.element = element;
  this.value = value;

  // Selecting the btns of this element
  this.incBtn = element.querySelector(".increase-btn");
  this.decBtn = element.querySelector(".decrease-btn");
  this.resetBtn = element.querySelector(".reset-btn");

  this.valueDom = element.querySelector(".count-value");
  this.valueDom.textContent = value;

  // bind to this
  this.increase = this.increase.bind(this); // this points to counter
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.incBtn.addEventListener("click", this.increase.bind(this));
  this.decBtn.addEventListener("click", this.decrease.bind(this));
  this.resetBtn.addEventListener("click", this.reset.bind(this));
};

// PROTOTYPES ***************************************************************************
// increase prototype
Counter.prototype.increase = function () {
  this.value++;
  this.valueDom.textContent = this.value;
};

// Decrease prototype
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDom.textContent = this.value;
};

// Reset prototype
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

// Creating the objects *****************************************************************
const firstEl = new Counter(getElement("#first-counter"), 100);
const secondEl = new Counter(getElement("#second-counter"), 200);

// Function to get the elements **********************************************************
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Please check the ${selection} selector once`);
  }
}
