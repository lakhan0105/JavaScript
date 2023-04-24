// CLOSURES

// - closure gives you an access to an outer function's scope from an inner function
// - make private variables using closures

// closure in js is created when a function is defined another function, and the inner function is returned from outer function/passed as an arguement to another function.
// The inner function has access to the variables and parameters of the outer function, even after the outer function has returned.

function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }
  return innerFunction;
}

// Print the sum using the above function
// Example 1
// const sum = outerFunction(2)(5);
// console.log(sum); // 7

// Example 2
const sum = outerFunction(2);
console.log(sum(5)); // 7

// Advantages of closures
// Closures are useful for creating private variables and functions in JavaScript,
// as well as for creating higher-order functions that can generate new functions with specific behavior based on their arguments.
