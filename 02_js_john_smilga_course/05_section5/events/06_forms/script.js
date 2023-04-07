// submit event listener
// preventdef
// how to get the val from the form

// sel the els
const formEl = document.getElementById("form");
const firstNameEl = document.getElementById("firstName");
const passwordEl = document.getElementById("password");

// submit event listener
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(firstNameEl.value); // grab the input
  console.log(passwordEl.value);
});

// Explaination:
// As we submit the form, nothing happens in the console and eveything disappears from the input bar
// this happens because the action class of the form el is not set
// since we are working in the front end, we cannot send the data to the backend
// So we just set the preventDefault() method for the form
