const option1=document.getElementById('option1');
const option2=document.getElementById('option2');
const option3=document.getElementById('option3');
const isStudent=document.getElementById('myCheckbox');
document.getElementById('submit').onclick=function(){
    if(isStudent.checked){
        document.getElementById('studentStat').textContent="you are a student";
    }
    else{
        document.getElementById('studentStat').textContent="you are not a student";
    }
    if (option1.checked){
        document.getElementById("radioStat").textContent="you selected option 1";
    }
    else if (option2.checked){
        document.getElementById("radioStat").textContent="you selected option 2";
    }
    else if (option3.checked){
        document.getElementById("radioStat").textContent="you selected option 3";
    }
    else{
        alert("no option selected");
        document.getElementById("radioStat").textContent="no option selected";
    }
}