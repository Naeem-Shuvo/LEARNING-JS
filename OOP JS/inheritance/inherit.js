// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. Helps with code reusability

//**uses extends keyword */

class Animal {

    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {

    name = "jojo rabbit";

    run() {
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {

    name = "nemo fish";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {

    name = "bald hawk";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

//**each child has its own ALIVE variable set to true,
// i can change it for that instance */
fish.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log(fish.alive);
fish.swim();
hawk.fly();