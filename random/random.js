let randomNum=Math.random();
console.log(Math.floor(randomNum*6)); //0 to 5
console.log(Math.floor(randomNum*6)+1); //1 to 6
console.log(Math.floor(randomNum*10)+1); //1 to 10
console.log(Math.floor(randomNum*100)+1); //1 to 100

// 51 to 100
const min=50;
const max=100;
console.log(Math.floor(randomNum*(max-min))+min+1);