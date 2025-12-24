// professional way to get user input

/* 
ISSUE FIXED: 
2. Script was running before DOM elements loaded, causing "Cannot set properties of null" error
3. Fixed by wrapping code in DOMContentLoaded event listener to wait for page to fully load
*/


    // Add this line to debug:
    console.log("Button element found:", document.getElementById("button"));

    document.getElementById("button").onclick = function() {
        let username = document.getElementById("input").value;
        document.getElementById("head1").textContent = `Welcome ${username}`;
    }
