const inputage = document.getElementById('ageInput');
const ageoutput = document.getElementById('ageBtn');
const result=document.getElementById('result');
ageoutput.onclick = function() {
    let age=inputage.value;
    if(age>=18){
        result.innerText="You are eligible to vote.";
    }
    else{
        result.innerText="You are not eligible to vote.";
    }
}