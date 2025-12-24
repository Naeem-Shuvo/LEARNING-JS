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
    document.getElementById("p1").textContent=`Name: ${userName}`;
    
    //if the <p> tags were empty and i try to change the text content wth something
    //to solve this problem i added SOMETHING (here "blank") in between the <p> tags in html file