/**
 * An array will hold a list of information mostly of many data items and datatypes each stored in a different element of an array
 * An Object Contains the related properties of a single data element
 * Functions inside an object are methods
 * You can access the properties of an object with the array access operator [] 
 * You can add a property to an object using the . operator e.g ``car.fuel='PMS``
 * Objects can contain other objects that contains arrays
 * Objects can contain Objects that contains objects and arrays
 */


//Below is an example of an object car

let car = {
    make: 'FORD',
    model: 'Taurus',
    year: 2023,
    getPrice: function () {
        //some calculations to be done
        return amount;
    },
    printDescription: function () {
        console.log(this.make + " " + this.model);
    }

}


car.printDescription();
console.log(car.year);
console.log(car['year'])