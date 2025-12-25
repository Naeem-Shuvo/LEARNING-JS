document.getElementById("randBtn").onclick=function(){
    let randomNum=Math.random(); 
    //this should be inside ONCLICK cz each time we click we want a new random number
    document.getElementById("randLabel").textContent=Math.floor(randomNum*100)+1;
}