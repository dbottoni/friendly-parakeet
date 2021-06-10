// Assignment code here
var btn = document.getElementById('generate');
// insert id = newPassword. word isn't insert though
//var newPassword = document.getElementById('password');
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
length = 0;
  // length = prompt("How many characters do you want in your password?");
  while (length < 8 || length > 128){
    length = prompt("How many characters do you want in your password?");
      if (length < 8 || length > 128){
     alert("Password must have between 8 and 128 characters");
   }
  }

 
  
  lower = confirm("Would you like to use lower case letters?");
  upper = confirm("Would you like to use upper case letters?");
  numeric = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");

  if (!lower && !upper && !numeric && !special){
    alert ("You must select at least one character type");
  }   
  

  // '=== true' is assumed if excluded in this case. intuitively looks for true in this instance
  if (lower === true) {
  charset += "abcdefghijklmnopqrstuvwxyz";
}

if  (upper === true){
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (numeric === true){
  charset += "0123456789";
}

if (special === true) {
  charset += "${^~*:?(`";
}
 

 for (var i = 0, n = charset.length; i < length; i++) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
    }

  // is this document.getElementbyId best practice? Or should I declare a variable like on line 4
  document.getElementById("password").innerHTML= retVal;
  
    console.log(retVal)

} 

// window.alert
// password array

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
 
