const numbers = [1, 2, 3, 4, 5];
const squared=numbers.map(function(element){
    return element**2;
});
//**AVOIDING CALLBACK */
console.log(squared); // [1, 4, 9, 16, 25]

const evens=numbers.filter(function(element){
    return element % 2==0;
});
console.log(evens); // [2, 4]

const sum=numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
console.log(sum); // 15
