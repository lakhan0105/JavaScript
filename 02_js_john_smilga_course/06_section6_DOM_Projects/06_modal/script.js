const openModalBtn = document.querySelector(".show-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modalOverlayEl = document.querySelector(".modal-overlay");
const btnEl = document.querySelectorAll(".btn");

// openModalBtn.addEventListener("click", function () {
//   if (modalOverlayEl.classList.contains("hide")) {
//     modalOverlayEl.classList.remove("hide");
//   } else {
//     modalOverlayEl.classList.add("hide");
//   }
// });

// closeModalBtn.addEventListener("click", function () {
//   if (modalOverlayEl.classList.contains("hide")) {
//     modalOverlayEl.classList.remove("hide");
//   } else {
//     modalOverlayEl.classList.add("hide");
//   }
// });

btnEl.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (modalOverlayEl.classList.contains("hide")) {
      modalOverlayEl.classList.remove("hide");
    } else {
      modalOverlayEl.classList.add("hide");
    }
  });
});
