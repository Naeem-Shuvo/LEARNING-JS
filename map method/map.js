const numbers = [1, 2, 3, 4, 5];
let modified=numbers.map(double);

function double(element) {
    //**the methods we are going to use 
    // for map will return something since it modifies the array 
    // unlike forEach which just executed on each element 
    // but MAP will do the same yet will return the output*/
    return element * 2;
}
console.log(modified);