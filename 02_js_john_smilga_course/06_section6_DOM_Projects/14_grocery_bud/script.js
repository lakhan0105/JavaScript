// Selecting the elements
const messageEl = document.querySelector(".message");
const form = document.querySelector(".form");
const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-btn");
const itemsContainer = document.querySelector(".items-container");
const itemslist = document.querySelector(".items-list");
const clearBtn = document.querySelector(".clear-items");

// Initialising the values
let editElement;
let editFlag = false;
let editID = "";

// EVENT LISTENERS ********************************************************************
// Event listener for form
form.addEventListener("submit", addItem);

// clear button event listener
clearBtn.addEventListener("click", clearItems);

// FUNCTIONS **************************************************************************
// addItem function -----------------------------------------------------------------
function addItem(e) {
  e.preventDefault(); // prevents the default behaviour when event occurs

  const value = userInput.value; // grab the input value
  const id = new Date().getTime().toString(); // generate id

  if (value !== "" && editFlag === false) {
    // Create the item element to be added dynamically
    const element = document.createElement("li"); // create li el
    element.classList.add("item"); // add class to li el

    // create attribute for the element (data-id=id)
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    itemslist.appendChild(element); // append with list-itmes (ul)
    element.innerHTML = `<p class="item-text">${value}</p>
                        <div class="btns-container">
                            <button class="btn edit-btn">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button class="btn delete-btn">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>`;

    const editBtn = element.querySelector(".edit-btn");
    let deleteBtn = element.querySelector(".delete-btn");

    // delete btn event listener
    deleteBtn.addEventListener("click", deleteItem);
    // edit item event listener
    editBtn.addEventListener("click", editItem);

    message("Item added successfully!", "success"); // message
    clearBtn.classList.add("show"); // show the clear btn
    itemsContainer.classList.add("show"); // unhide the items-container

    setToLocalStorage(id, value); // set to local storage
    setToDefault(); // set default
  } else if (value !== "" && editFlag === true) {
    editElement.innerHTML = value;
    message("Edited the item", "success");
    // editFromLocalStorage(editElement.textContent);
    setToDefault();
  } else {
    message("please enter something", "danger");
  }
}

// message function --------------------------------------------------------------------
const message = function (message, action) {
  messageEl.textContent = message;
  messageEl.classList.add(`show-${action}`);

  // make the message disappear after 1s
  setTimeout(function () {
    messageEl.textContent = "";
    messageEl.classList.remove(`show-${action}`);
  }, 1000);
};

// set default function -----------------------------------------------------------
const setToDefault = function () {
  console.log("set to default");
  userInput.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
};

// clear items function ---------------------------------------------------------------
function clearItems() {
  const items = document.querySelectorAll(".item");

  // if the (items>0), iterate over the items
  if (items.length > 0) {
    items.forEach(function (item) {
      itemslist.removeChild(item); // grab the parent of item and remove the item
    });
  }

  message("cleared the list", "danger");
  clearBtn.classList.remove("show");
  setToDefault();
}

// deleteItem function -------------------------------------------------------------------
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const elementID = element.dataset.id;

  itemslist.removeChild(element);
  message("Removed the item", "danger");

  if (itemslist.children.length === 0) {
    clearBtn.classList.remove("show");
  }

  removeFromLocalStorage(elementID);
  setToDefault();
}

// edit item function -------------------------------------------------------------------
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;

  // set the input to the item editElement
  userInput.value = editElement.innerHTML;
  userInput.focus();
  submitBtn.textContent = "Save Edit";

  // set editflag and edit id
  editFlag = true;
  editID = element.dataset.id;
}

// LOCAL STORGAE ************************************************************************
const setToLocalStorage = function (id, value) {
  localStorage.setItem(id, JSON.stringify(value));
};

const removeFromLocalStorage = function (id) {
  console.log(id);
  localStorage.removeItem(id);
};

// const editFromLocalStorage = function (txt) {
//   // console.log("edit frm local storage");
//   const value = JSON.parse(localStorage.getItem(txt));

//   console.log(value);
// };
