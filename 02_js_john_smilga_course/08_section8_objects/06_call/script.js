// Call method
// It is used to invoke a function with a specified 'this' value and arguments provided individually as comma-separated values.
// call - runs instantly, arguments - list of items

const lakhan = {
  firstName: "Lakhan",
  lastName: "kumar",
  greet: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

const dinesh = {
  firstName: "dinesh",
  lastName: "king",
};

// create a new function and call this to dinesh object using call
function newGreet() {
  console.log(this);
  console.log(`How are you ${this.firstName}`);
}

lakhan.greet(); // invoke the greet in lakhan obj // op=> Hello Lakhan
newGreet.call(dinesh); //  call newGreet in dinesh obj // op: How are you dinesh
lakhan.greet.call(dinesh); // call the greet func in lakhan to dinesh // op: Hello dinesh
newGreet.call({ firstName: "sachin", lastName: "bahaddur" }); // we created it

