// Function to select the element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error`PLease check the ${selection} selector`();
  }
}

// Constructor function
function Gallery(element) {
  this.container = element;
  this.imgElsList = [...element.querySelectorAll(".img")]; // sel the img of the card

  this.modal = getElement(".modal"); // sel the modal
  this.modalHeroImg = getElement(".modal-hero-image"); // modal hero img
  this.imgName = getElement(".image-name");
  this.modalImgsContainer = getElement(".modal-images-container");
  this.closeBtn = getElement(".close-btn");
  this.nextBtn = getElement(".next-btn");
  this.prevBtn = getElement(".prev-btn");

  // point openModal to the gallery(not container)
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  //   Event Listener
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.imgElsList);
      }
    }.bind(this)
  );
}

// add openModal function
Gallery.prototype.openModal = function (selectedImg, list) {
  this.setModalMainImg(selectedImg);

  this.modalImgsContainer.innerHTML = list
    .map(function (image) {
      return `
    <img src="${image.src}" 
    alt="not found" 
    data-id="${image.dataset.id}"
    title="${image.title}"
    class="${
      selectedImg.dataset.id === image.dataset.id
        ? "modal-list-img preview"
        : "modal-list-img"
    }" 
    >`;
    })
    .join("");
  this.modal.classList.add("open");
  this.nextImg = this.nextImg.bind(this);
  this.prevImg = this.prevImg.bind(this);

  this.nextBtn.addEventListener("click", this.nextImg);
  this.prevBtn.addEventListener("click", this.prevImg);
  this.closeBtn.addEventListener("click", this.closeModal);
};

// set modal main image
Gallery.prototype.setModalMainImg = function (selectedImg) {
  this.modalHeroImg.src = selectedImg.src;
  this.imgName.textContent = selectedImg.title;
};

// Next Image Function
Gallery.prototype.nextImg = function () {
  console.log(this);
  const previewImg = this.modalImgsContainer.querySelector(".preview");
  const nextImg =
    previewImg.nextElementSibling || this.modalImgsContainer.firstElementChild;

  previewImg.classList.remove("preview");
  this.setModalMainImg(nextImg);
  nextImg.classList.add("preview");
};

// previous image function
Gallery.prototype.prevImg = function () {
  const previewImg = this.modalImgsContainer.querySelector(".preview");
  const previousImg =
    previewImg.previousElementSibling ||
    this.modalImgsContainer.lastElementChild;

  previewImg.classList.remove("preview");
  this.setModalMainImg(previousImg);
  previousImg.classList.add("preview");
};

// closeModal function
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.nextBtn.removeEventListener("click", this.nextImg); // imp else odd imgs preview
  this.prevBtn.removeEventListener("click", this.prevImg);
};

// Create the objects
const natureEl = new Gallery(getElement(".nature"));
const cityEl = new Gallery(getElement(".city"));
