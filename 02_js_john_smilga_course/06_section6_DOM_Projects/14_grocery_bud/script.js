// Selecting the elements
const messageEl = document.querySelector(".message");
const inputContainer = document.querySelector(".input-container");
const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-btn");
const itemsList = document.querySelector(".items-list");
const clearBtn = document.querySelector(".clear-items");
const icons = document.querySelectorAll(".icon");
const delBtn = document.querySelector(".delete-btn");

// Initialisation
let edit = false;
let value;
let id;

// Event Listener for submit button
submitBtn.addEventListener("click", function () {
  // get the input values entered by the user
  value = userInput.value;

  if (value !== "" && edit === false) {
    displaymessage("Item added!", "added"); // display message
    clearBtn.classList.remove("hide"); // remove hidden class
    itemsList.appendChild(addItem(value)); // add item
  } else if (value !== "" && edit === true) {
    console.log("you can edit");
  } else {
    displaymessage("please enter something to store", "danger");
  }
});

// ******************* FUNCTIONS ***************************************************
// Function to print the message -------------------------------------------------
const displaymessage = function (message, action) {
  messageEl.textContent = message;
  messageEl.classList.add(`show-${action}`);
  messageEl.classList.remove("hide");

  setInterval(function () {
    messageEl.classList.remove(`show-${action}`);
    messageEl.setAttribute("visibility", "hidden");
    messageEl.classList.add("hide");
  }, 1000);
};

// Function to create element
const addItem = function (value) {
  const element = document.createElement("li");
  const attr = element.classList.add("item");
  element.innerHTML = `<p class="item-text">${value}</p>
                        <div class="icons-btn-container" data-id={id}>
                            <button class="icon edit-icon"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="icon delete-icon"><i class="fa-solid fa-trash"></i></button>
                        </div>`;

  return element;
};
