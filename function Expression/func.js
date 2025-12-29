const hello = function() {
    console.log("Hello, world!"); 
}
hello();    

//function passed as parameter and execute after timeout

setTimeout(hello,3000); //doesnt need a body since its already defined

//instead of callback declare entire function inside setTimeout
setTimeout(function() {
    console.log("Hello after 5 seconds");
},5000);