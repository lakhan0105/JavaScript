const btnsEL = document.querySelectorAll(".btn");
const countValueEl = document.querySelector(".count");

// Initialize
let count = 0;

// Update count value function
const updateCount = function () {
  countValueEl.textContent = count;
};

// Update Color function
const changeColor = function () {
  if (count > 0) {
    countValueEl.style.color = "green";
  } else if (count < 0) {
    countValueEl.style.color = "red";
  } else {
    countValueEl.style.color = "black";
  }
};

// Event Listener
btnsEL.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("decrease-btn")) {
      count--;
      updateCount();
      changeColor();
    } else if (e.currentTarget.classList.contains("increase-btn")) {
      count++;
      updateCount();
      changeColor();
    } else {
      count = 0;
      updateCount();
      changeColor();
    }
  });
});
