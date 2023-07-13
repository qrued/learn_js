/**
 * In web development, declaring var at the global scope is a bad idea
 *
 * Functions are datatypes in JS
 * () this is a method invokation operator
 *
 */

//don't do this
//var myVariable = 'I am the global scope';

//Don't do this;
// var myFunction = function () {
//     console.log('me too');
// }


function one() {
    return 'one';
}

console.log(one());





// function one() {
//     return function () {
//         return 'one';
//     }
// }

// console.log(one()())