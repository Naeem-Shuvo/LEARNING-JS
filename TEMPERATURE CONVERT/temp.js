function convert(){
    if(document.getElementById("c2f").checked){
        let celcius=document.getElementById("inputTemp").value;
        let fahrenheit=(celcius*9/5)+32;
        document.getElementById("result").textContent=fahrenheit.toFixed(2)+" °F";
}
    else if (document.getElementById("f2c").checked){
        let fahrenheit=document.getElementById("inputTemp").value;
        let celcius=(fahrenheit-32)*5/9;
        document.getElementById("result").textContent=celcius.toFixed(2)+" °C";
    }
    else{
        document.getElementById("result").textContent="Please select a conversion type.";
    }
}