//generate from given name to a format where 1st
//letter is capitalized and rest are lower case,spaces removed
let username = "   joHN doE ";

username=username.trim().charAt(0).toUpperCase() +
         username.trim().slice(1,username.trim().indexOf(" ")).toLowerCase()
         + " " +
         username.trim().slice(username.trim() .indexOf(" ")+1).charAt(0).toUpperCase()
         +username.trim().slice(username.trim().indexOf(" ")+2).toLowerCase();

console.log(username); //Output: JohnDoe 