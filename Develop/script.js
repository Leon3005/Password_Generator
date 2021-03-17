// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters for the generated password
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["!", "?", "*", ".", ",", "$"];

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  let password = "";

  // Logic would go here
  //Prompt for password length
  let passwordLengthPrompt = prompt(
    "What is the required length of your password. Must be between 8-128 characters."
  );
  // if statement to make sure user is inputting a number
  if (isNaN(passwordLengthPrompt)) {
    alert("Entered value is not a number. Please try again.");
    return;
  } else if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Entered value must be between 8 and 128. Please try again.");
    return;
  }

  //Prompt for lowercase
  const passwordLCasePrompt = confirm(
    "Would you like to use lowercase characters?"
  );

  //Prompt for uppercase
  const passwordUCasePrompt = confirm(
    "Would you like to use uppercase characters?"
  );

  //Prompt for numbers
  const passwordNumbersPrompt = confirm("Would you like to use numbers?");

  //Prompt for special characters
  const passwordSpecialPrompt = confirm(
    "Would you like to use special characters?"
  );

  //This array stores selected options for the password.
  let passwordData = [];
  //this if statement will push the selected option into the passwordData array.
  if (passwordLCasePrompt) {
    Array.prototype.push.apply(passwordData, lowerCase);
  }
  if (passwordUCasePrompt) {
    Array.prototype.push.apply(passwordData, upperCase);
  }
  if (passwordNumbersPrompt) {
    Array.prototype.push.apply(passwordData, numbers);
  }
  if (passwordSpecialPrompt) {
    Array.prototype.push.apply(passwordData, specialCharacters);
  }
  // Return our created password
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
