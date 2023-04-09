const reviewsArray = [
  {
    id: 0,
    author: "Lakhan",
    job: "Front-end dev",
    review:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
    img: "./images/0_image.jpg",
  },
  {
    id: 1,
    author: "Dinesh",
    job: " Content-manager",
    review:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
    img: "./images/1_image.jpg",
  },
  {
    id: 2,
    author: "Sarvan",
    job: "Front-end dev",
    review:
      "Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry. Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up.",
    img: "./images/2_image.jpg",
  },
  {
    id: 3,
    author: "Dhanush",
    job: "Photographer",
    review:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
    img: "./images/3_image.jpg",
  },
  {
    id: 4,
    author: "Sachin",
    job: "Business man",
    review:
      "Im baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed dollar toast everyday carry",
    img: "./images/4_image.jpg",
  },
];

// initialisation
let currentReview = 0;

// Selecting the elements
const imageEl = document.querySelector(".image");
const authorEl = document.querySelector(".author");
const jobEl = document.querySelector(".job");
const reviewEl = document.querySelector(".review");
const prevBtnEl = document.querySelector(".prev-btn");
const nextBtnEl = document.querySelector(".next-btn");
const randBtnEl = document.querySelector(".random-btn");

// Function to generate random number
const genRandomNum = function () {
  return Math.floor(Math.random() * reviewsArray.length);
};

// Function to change the review
const changeReview = function (index) {
  imageEl.setAttribute("src", reviewsArray[index].img);
  authorEl.textContent = reviewsArray[index].author;
  jobEl.textContent = reviewsArray[index].job;
  reviewEl.textContent = reviewsArray[index].review;
};

// Event Listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  changeReview(0);
});

// Event Listener for next btn
nextBtnEl.addEventListener("click", function () {
  if (currentReview === reviewsArray.length - 1) {
    currentReview = 0; // change cr to 0 (low index) when reached last item of arr
  }
  currentReview++;
  changeReview(currentReview);
});

// Event Listener for prev btn
prevBtnEl.addEventListener("click", function () {
  if (currentReview <= 0) {
    currentReview = reviewsArray.length; // change cr to highest index (last item of ary)
  }
  currentReview--;
  changeReview(currentReview);
});

// Event Listener for random btn
randBtnEl.addEventListener("click", function () {
  currentReview = genRandomNum();
  changeReview(currentReview);
});

// DOUBTS
// -we can also build this without passing an arg in changereview(), cuz reviewNumber is a global variable
//- problem: the size of the container keeps changing when i press next/any btn
