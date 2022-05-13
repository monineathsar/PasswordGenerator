// PASSWORD CRITERIA ARRAYS
var charLength = 8;
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l" , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" , "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar = ["!", "@", "#", "$", "%", "&", "*", "<", ">", "?"];

//Empty array for when user select multiple criteria arrays
var passwordCriteria = [];  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var criteriaPrompts = selectCriteriaPrompts();

  if (criteriaPrompts){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
// Generates passwords based on selected prompts
function generatePassword(){
  var password = "";
  for()
}
// Series of prompts for password criteria once user first clicks on "Generate Password" btn
function selectCriteriaPrompts(){
    passwordCriteria = [];
    charLength = parseInt(prompt("How many charecters do you need for your password? (ex: 8 - 128"));

    //First "if statement" checks to make sure user insert correct type
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
      alert("Password length must be a number between 8 to 128. Please try again.")
      return false;
    }
    //Rest of "if statements" when user confirms or cancels each criteria prompts, and combines the criteria arrays into "passwordCriteria" array
    if (confirm("Does your password require lowercase letters?")) {
      passwordCriteria = passwordCriteria.concat(lowerCaseLetters);
    }
    if (confirm("Does your password require uppercase letters?")) {
      passwordCriteria = passwordCriteria.concat(upperCaseLetters);
    }
    if (confirm("Does your password require numbers?")) {
      passwordCriteria = passwordCriteria.concat(numbers);
    }
    if (confirm("Does your password require special charecters?")) {
      passwordCriteria = passwordCriteria.concat(specialChar);
      
    }
    return true;
      
}