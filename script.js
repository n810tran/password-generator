// when button is pressed, prompt user for password criteria
// choose a length from 8 - 128 characters
// when answering each prompt, input should be validated and at least one character type should be selected
// confirm inclusion of lowercase,uppercase,numeric, and/or special characters
// when all prompts answered, then password matching criteria is generated

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Define possible characters in categories
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9']
var specialCharacters = ['!' ,'"' ,'#' ,'$' ,'%' ,'&' ,"'" ,'(' ,')' ,'*' ,'+' ,',' ,'-' ,'.' ,'/' ,':' ,';' ,'<' ,'=' ,'>' ,'?' ,'@' ,'[' ,'\\' ,']' ,'^' ,'_' ,'`' ,'{' ,'|' ,'}' ,'~'];
var possibleCharacters = []

//Generate password with user input
function generatePassword() {
  passwordLength = prompt("How many characters would you like in you password? Choose between 8 and 128 characters.");

  if (passwordLength < 8) {
    alert("Please enter a length of at least 8 characters.");
  } else if (passwordLength > 128) {
    alert("Please enter a length up to 128 characters.");
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

  hasLowercase = confirm("Do you want lowercase characters in your password?");

  if (hasLowercase) {
    alert("Your password will have lowercase characters.")
  } else {
    alert("Your password will not have lowercase characters")
  }

  hasUppercase = confirm("Do you want uppercase characters in your password");

  if (hasUppercase) {
    alert("Your password will have uppercase characters.")
  } else {
    alert("Your password will not have uppercase characters")
  }

  hasNumeric = confirm("Do you want numeric characters in your password?");

  if (hasNumeric) {
    alert("Your password will have numeric characters.")
  } else {
    alert("Your password will not have numeric characters")
  }

  hasSpecial = confirm("Do you want special characters in your password?");

  if (hasSpecial) {
    alert("Your password will have special characters.")
  } else {
    alert("Your password will not have special characters")
  }


}





// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);