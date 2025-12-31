// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

// --------- EXAMPLE 2 ---------
// swap 2 elements in an array
const colors = ["red", "green", "blue", "yellow"];
[colors[0],colors[3]]=[colors[3],colors[0]];
console.log(colors); // ['yellow', 'green', 'blue', 'red']

// --------- EXAMPLE 3 ---------
//assign array elements to variables
const numbers=[10,20,30,40,50];
let [num1,num2,num3]=numbers;
console.log(num1,num2,num3); // 10 20 30

//**use rest operator to assign rest of the numbers */
[num1,num2,num3, ...extraNums]=numbers;
console.log(extraNums); // [40, 50]

// --------- EXAMPLE 4 ---------
// assign object properties to variables
const person1={
    name: "Alice",
    age: 30,
    city: "New York",
    job: "Engineer"
};
const person2={
    name: "Bob",
    age: 25,
    city: "San Francisco",
};

let name, age, city, job;

// First assignment
({name,age,city,job} = person1);
console.log(name,age,city,job); // Alice 30 New York Engineer

// Second assignment (no default values allowed here)
({name,age,city,job} = person2);
// You'd need to handle the default manually:
job = job || "Nothing";
console.log(name,age,city,job); // Bob 25 San Francisco Nothing

// --------- EXAMPLE 5 ---------
// destructuring function parameters
//**we want to pass parameters directly from the object properties */
function displayPerson({name,age,city,job="Nothing"}){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}, Job: ${job}`);
}
displayPerson(person1); // Name: Alice, Age: 30, City: New York, Job: Engineer
displayPerson(person2); // Name: Bob, Age: 25, City: San Francisco, Job: Nothing