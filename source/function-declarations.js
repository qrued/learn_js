/**
 * A function is a block we can name and reuse
 * We can asssign a function to a variable and then call it later on
 * We can also add parameters to a function and parse in arguments later on
 * We can also return values from a function
 * 
 * you can also create functions witout naming them (Funtion Expression)
 * 
 * 
 */

function sayHello(usrname) {
    console.log('-----------');
    console.log('Hello ' + usrname + '!!');
    console.log('-----------');
}

let a = sayHello;

a('Choco');


function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(150);

console.log(tax)



