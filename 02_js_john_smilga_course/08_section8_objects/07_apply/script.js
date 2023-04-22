// Apply - runs instantly, arguements - array of items
const lakhan = {
  firstName: "Lakhan",
  lastName: "Kumar",
};

const dinesh = {
  firstName: "Dinesh",
  lastName: "King",
};

function greet(city, country) {
  console.log(
    `Hello ${this.firstName}, How is the weather in ${city},${country}`
  );
}

// call method
greet.call(dinesh, "Delhi", "India"); // we pass list of items in call method
// apply method
greet.apply(lakhan, ["Katmandu", "Nepal"]); // we pass array as an arg for apply method

// BIND
// - doesnt run instantly, we need to assign it and then invoke it
// - arguments - list of items 
const prakash = {
  firstName: "prakash",
  lastName: "S",
};

const newGreet = function () {
  console.log(`Hello ${this.firstName}`);
};

// newGreet.bind(prakash); // does not run instantly
const greetPrakash = newGreet.bind(prakash);
greetPrakash(); // Hello prakash
