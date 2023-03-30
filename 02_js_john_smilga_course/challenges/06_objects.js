/*
1. create car obj 
2. add make, model, year, colors(array),hybrid(boolean) keys 
3. add 2 methods (drive ), (stop)
4. in the func body set up log with random text 
5. log make 
6. log first color 
7. invoke 2 methods 
*/

const car = {
  make: "Dodge",
  modal: "Challenger",
  year: 1970,
  colors: ["blue", "green"],
  hybrid: true,
  drive: function () {
    console.log("I am driving");
  },
  stop: function () {
    console.log("Stop the car");
  },
};

// log make
console.log(car.make); // Dodge
console.log(car.colors[0]); // blue

// Invoke the methods
car.drive(); // I am driving
car.stop(); // Stop the car
