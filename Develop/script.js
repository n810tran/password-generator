/*
when button is pressed, prompt user for password criteria
when prompted, allow user to select criteria
choose a length from 8 - 128 characters
confirm inclusion of lowercase,uppercase,numeric, and/or special characters
when answering each prompt, input should be validated and at least one character type should be selected
when all prompts answered, then password matching criteria is generated

*/


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
