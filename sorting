// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings

let numbers=[1,10,2,3,4,5,9,8,7,6];
numbers.sort();
console.log(numbers); // Output: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// "1" comes before "10" because it compares character by character
// "10" starts with "1", so it comes before "2" (which starts with "2")


//**just remember a-b means ascending order */
numbers.sort((a,b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.sort((a,b)=>b-a);
console.log(numbers); // Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Sorting an array of objects based on a property
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                            {name: "Patrick", age: 37, gpa: 1.5},
                            {name: "Squidward", age: 51, gpa: 2.5},
                            {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); //FORWARD
console.log(people);
people.sort((a, b) => b.age - a.age); //REVERSE
console.log(people);

//**sorting strings inside object is different */
people.sort((a, b) => a.name-(b.name)); 
console.log(people);
people.sort((a, b) => a.name.localeCompare(b.name)); //FORWARD
console.log(people);


//**sorting strings */
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
names.sort();
console.log(names); // Output: [ 'Patrick', 'Sandy', 'Spongebob', 'Squidward' ]
names.sort((a, b) => b.localeCompare(a));  // REVERSE ORDER
console.log(names); // Output: [ 'Squidward', 'Spongebob', 'Sandy', 'Patrick' ]