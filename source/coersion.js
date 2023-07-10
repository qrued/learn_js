/**
 * 
 * isNaN checks if a value is not a number and
 * returns either True or false
 * parseInt converts a string to a number
 * 
 * */let a = 7;
let b = '6';

b = parseInt(b);

let c = a + b;

console.log("Answer: " + c);


let y = parseInt('Vic', 10);
let z = isNaN(y);

console.log(y);
console.log(z);