//***Just like ...args in python***

let var1=20;
let var2=30;
let var3=40;

function sum(...args){ //rest parameter
  for (let x of args) console.log(x);      
}
sum(var1, var2, var3);
//Output:
//20
//30
//40
function emnei(...names){
    console.log(names);
}
emnei(var1, var2, var3);
//Output: [ 20, 30, 40 ]


function returnArray(...items)
    {
        return items;

    }
let arr=returnArray(var1, var2, var3);
console.log(arr);
//Output: [ 20, 30, 40 ]


function combineName(...titles){
   return titles.join(" ");
}
let fullName = combineName("Naeem", "Shuvo");
console.log(fullName);
//Output: Naeem Shuvo


let numArr=[1,2,3,4,5];
let numArr2=[6,7,8,9,10];

function maximum(...numbers){
    //***this one in spread operator , MATH.max cant perform of 
    // whole array, so we needed to spread it first*/
    return Math.max(...numbers);
}
console.log(maximum(...numArr, ...numArr2));
//Output: 10