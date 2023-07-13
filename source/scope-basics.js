/**
* 
* Just like humans, varianles and blocks of code have a lifespan
* They're created, they work and they die(end of scope)
* If a variable was created in a global scope, it can be used in a local but, the reverse is not the case
* 
* 
*/



let a = 'Choco';

function scopeTest() {
    let b = 'Marissa';
    let c = a + b;
    console.log(a)
    console.log(c);
    a = 'Sweet';
}

scopeTest(); //calling the function

//Outside test
console.log(a);