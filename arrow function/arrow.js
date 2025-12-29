// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

function hello(){
    console.log("Hello World");
}
hello();

// ***Arrow Function Syntax
const helloArrow = () => {  //**No parameters */
    console.log("Hello World from Arrow Function");
}
helloArrow();

//**Single line implicit return + use of parameter */ 
const helloArrow2 = (user) => console.log("Hello World from Arrow Function "+user);
helloArrow2("Nemo");

const helloArrow3 = (user,age) =>{ console.log("Hello World from Arrow Function "+user);
                              console.log(`You are ${age} years old.`);}
helloArrow3("Nemo",23);