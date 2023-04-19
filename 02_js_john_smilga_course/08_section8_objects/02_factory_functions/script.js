let person1 = {
  firstName: "sarvan",
  sayHello: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

let person2 = {
  firstName: "dinesh",
  sayHello: function () {
    console.log(`Hello ${this.firstName}`);
  },
};

// now lets say u have 3000 person objects and u need to chamge somthing in all of them
// You cannot keep selecting each and every person one by one, so we make use of fac func
function createFunc(firstName) {
  return {
    firstName: firstName,
    sayHello: function () {
      console.log(`Hello ${this.firstName}`);
    },
  };
}

person1 = createFunc("lakhan");
person1.sayHello();

person2 = createFunc("dinesh");
person2.sayHello();
