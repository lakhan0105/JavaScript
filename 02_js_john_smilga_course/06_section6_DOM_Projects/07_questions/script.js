// Select the elements
const btnsEl = document.querySelectorAll(".btn");

btnsEl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle("show-text");
  });
});
