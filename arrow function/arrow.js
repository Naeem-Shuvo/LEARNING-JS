const numbers = [1, 2, 3, 4, 5];
const squared=numbers.map((element)=>{
    return element**2;
});
console.log(squared); // [1, 4, 9, 16, 25]

const evens=numbers.filter((element)=>{
    return element % 2==0;
});
console.log(evens); // [2, 4]