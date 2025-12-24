const PI=3.14;
let radius;
let circumference;

document.getElementById("button").onclick = function() {
    radius=Number(document.getElementById("radius").value);
    circumference=2*PI*radius;
    document.getElementById("result").textContent=`Circumference is ${circumference}`;
}