// Selecting the elements
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let counter = 0;

// set the position of the each slide (placed them horizontally next to each other)
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// Function to change the transform property of the slide
function carousel() {
  // when slide reaches the end/begining
  //   if (counter > slides.length - 1) {
  //     counter = 0;
  //   } else if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  // hide/display the prev btn
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  // hide/display the next btn
  if (counter === slides.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  // change transform prop of each slide
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

// hide the prevBtn by default------------------------------
prevBtn.style.display = "none";
nextBtn.style.display = "block";
