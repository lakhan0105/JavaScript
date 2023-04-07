// web storage api - provided by the browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name','lakhan')
// sessionStorage.setItem('name','john')

// Points
// Session storage - persists data b/t the sessions (while our tab is still open)
// Local Storage - persists data b/t opening and closing of the browser
// Both have same methods [setItem, getItem, removeItem, clear]

// sessionStorage.setItem("firstName", "dinesh");
// localStorage.setItem("firstName", "dinesh");

// Note:
// If u override the same key again, then it will be replaced by new
localStorage.setItem("firstName", "sarvan"); // this val will be deleted
localStorage.setItem("firstName", "sachin");

// set job as dev
localStorage.setItem("job", "developer");
// Access the key vlaue pairs from the storage
const firstName = localStorage.getItem("firstName");
console.log(firstName); // sachin
// remove item
localStorage.removeItem("firstName"); // firstName is gone
// clear
localStorage.clear();

// JSON.Stringify() and JSON.Parse() ----------------------------------------------------
const friends = ["saravn", "sachin", "dinesh"];
// localStorage.setItem("friends", friends); //  we do not get in the form of an array
// so we use stringify
localStorage.setItem("friends", JSON.stringify(friends)); // stores in the form of array
const values = JSON.parse(localStorage.getItem("friends")); // [Note: '' is must]
console.log(values[0]); // sarvan

// Note
// we use stringify while submiting the data
// we use parse to get the data
// it is must to include '' for parse method arg

// DOUBT
// check if the val is already present in the local storage ?
// create empty array
let fruits;
if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
// fruits.push("tomato");
fruits.push("potato");
localStorage.setItem("fruits", JSON.stringify(fruits));
