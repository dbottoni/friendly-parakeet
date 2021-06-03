// Assignment code here
var btn = document.getElementById('generate')
// insert id = password. word isn't insert though
var password = document.getElementById('password')
var length;
var lower;
var upper;
var numeric;
var special;
var charset= "";

btn.onclick = function(writePassword)
{ 
// line 13 clears previous retVal onClick
var retVal= "";
  length = prompt("How many characters do you want in your password?");
  lower = confirm("Would you like to use lower case letters?");
  upper = confirm("Would you like to use upper case letters?");
  numeric = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");

  // '=== true' is assumed if excluded in this case. intuitively looks for true in this instance
if (lower === true) {
  charset += "abcdefghijklmnopqrstuvwxyz";
} 

if (upper === true){
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (numeric === true){
  charset += "1234567890";
}

if (special === true) {
  charset += "$^~*:?`";
}

 for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
    }

console.log(retVal)

} 








// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
 
