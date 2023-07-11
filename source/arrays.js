/**
 * Arrays are variables that can hold different values
 * To access a character in a string use the .charAt() method
 * .lenght returns the lenght of an array
 * Sparse array is created when you add and element to and index far above the current lenght of the array
 * Use the .push(value) method to append values to an array and .pop('value') to remove elements
 * 
 */

let a = [, 48, 15, 16, 23, 42];
let b = ['david', 'eddie', 'allex', 'micheal'];

console.log(b[0].charAt(0))
console.log(b)


b[7] = 'Choco'
console.log(b)
len = b.length // Not zero base
console.log(len)