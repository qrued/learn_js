/**
 * Iterations allows us to loopp through a block of code until a certain condition is met
 * e.g (for), (while),
 * 
 * 
 */


// let a = [2, 34, 5, 65, 7, 87];
// for (i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

let a = [2, 34, 5, 65, 7, 87];
a[9] = 29;
let count = 0;
while (count < a.length) {
    console.log(a[count++]);
}