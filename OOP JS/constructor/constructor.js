//**this is constructor , it is a method that accepts parameters
// and creates objects */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function(){
        console.log("driving a " + this.make + " " + this.model);
    }
}

//** creating objects using constructor */
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1); // Car { make: 'Toyota', model: 'Camry', year: 2020 }
console.log(car2.model); // Civic
car1.drive(); // driving a Toyota Camry
car2.drive(); // driving a Honda Civic