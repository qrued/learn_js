/**
 * We use decision statements to add logic to our code
 * (if, else, else if,), (switch and break), (tenary operator), (==, !=, ===, !==)
 * switch is case sensitive
 * tenary is more like an inline operation
 * strict equality restricts coersion of datatypes.(===)
 * 
 */


// count = 5
// if (count == 3) {
//     console.log("Count is equals to 3");
// }
// else if (count > 3) {
//     console.log("count is greater that 3");
// }
// else {
//     console.log("Count is less than 3");
// }

let superHero = 'Aniebiet';
switch (superHero.toLowerCase()) {//toLowerCase will convert every uppercase to lower case to avoid errors

    case 'lawrence':
        console.log("Has Business skills");
        break;
    case 'tony':
        console.log("Logical and musical");
        break;
    case 'aniebiet':
        console.log("Has High IQ");
        break;
    default:
        console.log("Input a superHero");
        break;
}


//tenary operation
// let a = 23, b = 24;
// let result = (a == b) ? 'equal' : 'not_equal';
// console.log(result)

//tenary operation with strict equality
let a = 23, b = '23';
let result_ = (a === b) ? 'equal' : 'not_equal';
let result = (a != b) ? 'not equal' : 'equal';
console.log(result)