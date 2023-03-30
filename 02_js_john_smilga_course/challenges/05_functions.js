/*
1. create 'calculateTotal' function 
2. add 2 parameters subTotal, tax
3. return sum of paramenters 

4. create 3 vars 'order1',2,3
5. call calculateTotal, pass in some vals and assign result to each order
6. log all 3 orders 
7. refactor 'calculateTotal' to func expression 
*/

const calculateTotal = function (subTotal, tax) {
  return subTotal + tax;
};

const order1 = calculateTotal(100, 20);
const order2 = calculateTotal(100, 20);
const order3 = calculateTotal(100, 20);

console.log(order1, order2, order3);
