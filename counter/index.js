//Just set alias for each button and label's DOM element

const increaseButton=document.getElementById("increment");
const decreaseButton=document.getElementById("decrement");
const resetButton=document.getElementById("reset");
const counterNumber=document.getElementById("counterNumber");

let count=0;
increaseButton.onclick=function(){
    count++;
    counterNumber.textContent=count;
}
decreaseButton.onclick=function(){
    count--;
    counterNumber.textContent=count;
}
resetButton.onclick=function(){
    count=0;
    counterNumber.textContent=count;
}