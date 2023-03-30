// Conditional challenge
/*
1. create 2 objs personn1,2
2.setup name,age(15-25), status('resident),('tourist')

3. setup ifelse where age >18 and status ===resident 
4. test with both the objs 
*/

const person1 = {
  firstName: "dinesh",
  age: 21,
  status: "resident",
};

const person2 = {
  firstName: "ganesh",
  age: 45,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("person1 can cast the vote ");
} else {
  console.log("not eligible ");
}

if (person2.age >= 18 && person2.status === "resident") {
  console.log("person1 can cast the vote ");
} else {
  console.log("not eligible ");
}
