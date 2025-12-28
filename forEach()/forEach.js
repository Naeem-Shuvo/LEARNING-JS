// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

let numbers = [1, 2, 3, 4, 5];

//***it will call print function over each element of the array***

numbers.forEach(multiplyByTwo);
numbers.forEach(print);


//***no change if we call multiplyByTwo after print***
// numbers.forEach(print);
// numbers.forEach(multiplyByTwo);

function multiplyByTwo(item, index, array) {
    // modifying the original array
    array[index] = item * 2;
}
function print(item) { //only taking first parameter 
    console.log(item);
}