// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

let fruits = ["apple", "banana", "cherry"];

//***it will call print function over each element of the array***

//**used callback, not necessary */
fruits.forEach((item, index, array) => capitalizeFruit(item, index, array, print)); // Output: APPLE, BANANA, CHERRY

function capitalizeFruit(item, index, array, callback) {
    array[index]=item.charAt(0).toUpperCase()+item.slice(1);
    callback(array[index]); // Use the callback to print
}

function print(item) { //only taking first parameter 
    console.log(item);
}