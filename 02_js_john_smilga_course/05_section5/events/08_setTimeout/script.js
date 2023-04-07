/*
setTimeout - runs function after specfic time 
- pass reference function (do not invoke)
- duration in ms (1000ms = 1s)
- default 0, will cover in async/await section
- returns unique identifier 
- clearTimeout to cancel
- are available on window object 
*/

function sayHello() {
  console.log("hello lakhan");
}
setTimeout(sayHello, 1000); // id 1

// alternate (arrow functions)
setTimeout(function () {
  console.log("Hellow world"); // 2
}, 1000);

// pass arguments
function showScore(name, score) {
  console.log(`Hi ${name}, your score is ${score}`);
}
// setTimeout(showScore, 1000, "lakhan", 50); // args are passed after the dur like this

// it returns an identifier
const fourthId = setTimeout(showScore, 1000, "lakhan", 50);
console.log(fourthId); // 4

// clearTimeout - clears the setTimeout
clearTimeout(fourthId); // 4th id gets deleted

// ---------------------------------------------------------------------------------------
// setIntervals - runs repeatedly, at specific intervals
const lastId = setInterval(showScore, 1000, "dinesh", 20); // runs every sec
clearInterval(lastId); // stops
