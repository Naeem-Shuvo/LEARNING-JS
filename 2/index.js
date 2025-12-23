//variables
 let userName="john";
    let age=25;
    let cg=3.8;
    let isStudent=true;
    let hobbies=["reading","gaming","coding"];
    let address={
        street:"123 Main St",
        city:"New York",
        zip:"10001"
    };
    console.log(`your name is ${userName} and age is ${age}`);
    console.log(`your cg is ${cg} and its not good`);

    console.log(typeof isStudent);
    console.log(typeof address);
    console.log(typeof hobbies); //object as well
    
    // Proper ways to check for arrays:
    console.log(Array.isArray(hobbies)); // true
    console.log(hobbies instanceof Array); // true
    console.log(Object.prototype.toString.call(hobbies)); // "[object Array]"

    console.log(userName);
    console.log(age);
    console.log(isStudent);
    console.log(hobbies);
    console.log(address);