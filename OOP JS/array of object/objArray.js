const fruits = [          {name: "apple", color: "red", calories: 95}, 
                          {name: "orange", color: "orange", calories: 45}, 
                          {name: "banana", color: "yellow", calories: 105}, 
                          {name: "coconut", color: "white", calories: 159}, 
                          {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(fruits[0].calories); // 95
console.log(fruits[2].name); // banana
console.log(fruits[4]);// { name: 'pineapple', color: 'yellow', calories: 37 }

// Add a new fruit object
fruits.push({ name: "grapes", color: "purple", calories: 62});
console.log(fruits[5]); // output: { name: 'grapes', color: 'purple', calories: 62 }

// Remove the last fruit object
// pop method returns the removed object
console.log(fruits.pop());

// forEach to print all fruit names
fruits.forEach(item => {
    console.log(item.name);
})

// Remove fruit objects by indices
fruits.splice(1, 2);
console.log(fruits);
 // output: [ { name: 'apple', color: 'red', calories: 95 },
 //           { name: 'coconut', color: 'white', calories: 159 }, 
 //           { name: 'pineapple', color: 'yellow', calories: 37 } ]