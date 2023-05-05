// DESTRUCTURING
// accessing/extracting the values from the arrays/objects into variables

// Arrays Destructuring ---------------------------------------------------------------------------
const fruit = ["bannana", "apple", "mango", "pineapple"];
const friends = ["john", "peter"];

const [fruit1, fruit2, ...remainingFruits] = fruit;
console.log(fruit1); // bannana
console.log(fruit2); // apple
console.log(remainingFruits); //  ['mango', 'pineapple']

// Objects destructuring ---------------------------------------------------------------------------
const bob = {
  first: "Bob",
  age: 55,
  city: "New Delhi",
};
const { first, age, city } = bob;
console.log(first, age, city); // Bob 55 New Delhi
// Note: the var name must match the prop names of the obj

// Function param destructuring ---------------------------------------------------------------------------
function persondetails(personObj) {
  const { first, age, city } = personObj;
  console.log(first, age, city); // Bob 55 New Delhi
}
persondetails(bob);

// New string methods
// startsWith(), endsWith(), includes(), repeat()

//
