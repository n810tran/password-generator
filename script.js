// when button is pressed, prompt user for password criteria
// choose a length from 8 - 128 characters
// when answering each prompt, input should be validated and at least one character type should be selected
// confirm inclusion of lowercase,uppercase,numeric, and/or special characters
// when all prompts answered, then password matching criteria is generated

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Define possibnle characters
var specialCharacters = ['!' ,'"' ,'#' ,'$' ,'%' ,'&' ,"'" ,'(' ,')' ,'*' ,'+' ,',' ,'-' ,'.' ,'/' ,':' ,';' ,'<' ,'=' ,'>' ,'?' ,'@' ,'[' ,'\\' ,']' ,'^' ,'_' ,'`' ,'{' ,'|' ,'}' ,'~'];
var numericCharacters = ['0' ,'1' ,'2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9']
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function generatePassword() {
  passwordLength = prompt("How many characters in you password? Choose between 8 and 128 characters.");
  if (passwordLength < 8) {
    alert("Please enter a length of at lease 8 characters.")

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