// Arrays challenge
// - create a array fruits and store some fruits
// - setup last item as number (random)
// - assign 1st fruit to a variable
// - re-assign last array to actual fruit value
// - log 1st fruit variable and entire fruits array

const fruits = ["apple", "grapes", "bannana", 120];

let favFruit = fruits[0];

fruits[fruits.length - 1] = "new fruit";

console.log("first fruit (fav) : " + favFruit); // apple
console.log("fruit array : " + fruits); // fruit array : apple,grapes,bannana,new fruit
