// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompt for password length
const passwordLengthPrompt = prompt("What is the required length of your password");

//Characters for the generated password
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialCharacters = ["!", "?", "*", ".", ",", "$"]

// Declare a new function on line 3
function generatePassword() {
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
	...

	// Return our created password
	return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
