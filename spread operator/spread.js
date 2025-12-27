let numbers = [1, 2, 3];
console.log("Original array:", numbers); //Original array: [ 1, 2, 3 ]

let newNumbers = [...numbers, 4, 5]; //can concatenate arrays or add new elements
console.log("New array with additional elements:", newNumbers); 
//New array with additional elements: [ 1, 2, 3, 4, 5 ]

let user="Naeem Shuvo";
let letters=[...user];
console.log(letters);
//Output: [ 'N', 'a', 'e', 'e', 'm', ' ', 'S', 'h', 'u', 'v', 'o' ]
console.log(user.length); //Output: 11
console.log(letters.length); //Output: 11

console.log(letters.join("-"));
//Output: N-a-e-e-m- -S-h-u-v-o

console.log(...numbers,...letters, "Hello");
//Output: 1 2 3 N a e e m   S h u v o Hello

for(let x of [...user]) process.stdout.write(x + " "); //to print in same line
//Output: N a e e m   S h u v o