// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

let fruits = ["apple", "banana", "cherry"];

//***it will call print function over each element of the array***

//**used callback, not necessary */
fruits.forEach(item => uppercaseFruit(item, print)); // Output: APPLE, BANANA, CHERRY

function uppercaseFruit(item, callback) {
    const uppercased = item.toUpperCase();
    callback(uppercased); // Use the callback to print
}
function print(item) { //only taking first parameter 
    console.log(item);
}