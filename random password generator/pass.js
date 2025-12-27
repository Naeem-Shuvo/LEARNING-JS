//creating aliases for the checkboxes
const Length = document.getElementById('length');
const containUppercase = document.getElementById('uppercase').checked;
const containNumbers = document.getElementById('numbers').checked;
const containSymbols = document.getElementById('symbols').checked; 
const containLowercase = document.getElementById('lowercase').checked;

let setOfPasswords = [];

document.getElementById("generate").onclick = function() {
    // Read values INSIDE the function when button is clicked
    const length = parseInt(document.getElementById('length').value); // Get VALUE
    const containUppercase = document.getElementById('uppercase').checked;
    const containNumbers = document.getElementById('numbers').checked;
    const containSymbols = document.getElementById('symbols').checked; 
    const containLowercase = document.getElementById('lowercase').checked;

    let allowedChars = "";
    let password = "";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    // Check if at least one character set is selected
    if (!containUppercase && !containLowercase && !containNumbers && !containSymbols) {
        document.getElementById("result").textContent = "Please select at least one character type!";
        return;
    }
    
    // Check if length is valid
    if (!length || length < 12 || length > 128) {
        document.getElementById("result").textContent = "Please enter a valid length (1-128)!";
        return;
    }
    
    if (containUppercase) {
        allowedChars += uppercaseChars;
    }
    if (containLowercase) {
        allowedChars += lowercaseChars;
    }
    if (containNumbers) {
        allowedChars += numberChars;
    }
    if (containSymbols) {
        allowedChars += symbolChars;
    }

    // Generate password
    for (let i = 0; i < length; i++) {
        let randomIdx = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIdx];
    }
     
    if (!setOfPasswords.includes(password)) {
        setOfPasswords.push(password);
        document.getElementById("result").textContent = password;
    }
    else{
        document.getElementById("result").textContent = "password already exists, please generate again";
    }
    console.log(setOfPasswords);
}