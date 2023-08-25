/*







*/


// Assignment Code
const generateBtn = document.querySelector("#generate");
// when button is pressed, prompt user for password criteria
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



// choose a length from 8 - 128 characters



// when answering each prompt, input should be validated and at least one character type should be selected



// confirm inclusion of lowercase,uppercase,numeric, and/or special characters


// when all prompts answered, then password matching criteria is generated
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordlength() {
  const userInput = prompt
}