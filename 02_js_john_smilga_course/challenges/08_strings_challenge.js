// STRING CHALLENGE

/*
1. create func fullName
2. accept 2 params 'firstName' 2ndname
3. conact them together and return result in uppercase 
4. invoke fullName and pass some values 
5. log result
6. change the order of arguments 
7. refactor to obj param 
*/

// No order
const fullName = function (firstName, secondName) {
  const fullName = `${firstName} ${secondName}`;
  return fullName.toUpperCase();
};
console.log(fullName("lakhan", "kumar"));

// to change the order we need to pass the args as objects
// refactor to object param
const fullName2 = function ({ firstName2, secondName2 }) {
  const fullName2 = `${firstName2} ${secondName2}`;
  return fullName2.toUpperCase();
};
console.log(fullName2({ secondName2: "singh", firstName2: "sarvan" }));
