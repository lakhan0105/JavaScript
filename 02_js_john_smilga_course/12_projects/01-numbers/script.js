// Selecting the elements
const numbersEl = document.querySelectorAll(".number");

let count = 50;

// updateCount Function
function updateCount(el) {
  const value = el.dataset.value;
  let initialValue = 0;
  let increment = Math.ceil(value / 1000); // by how many values u want to increment

  const incrementNum = setInterval(() => {
    //   increase the initialVal untill >= value set by user
    if (!(initialValue >= value)) {
      initialValue += increment;
      el.textContent = `${initialValue}+`;
    } else {
      clearInterval(incrementNum);
      el.textContent = `${value}+`;
      return;
    }
  }, 1);
}

numbersEl.forEach((numberEl) => {
  updateCount(numberEl);
});
