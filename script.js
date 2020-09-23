///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

function generatePassword() {

  //Prompt the user to confirm length of password

  var passwordLength = prompt("How many characters would you like your password. Choose between 8 - 126 characters in length");
  console.log(passwordLength)
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters would you like your password. Choose between 8 - 126 characters in length");
  }

  // prompt user to confirm use of uppercase, lowercase, numbers, or symbols in password

  var allowUpper = confirm("Would you like to include uppercase characters in your password?");

  var allowLower = confirm("Would you like to include lowercase characters in your password?");

  var allowNumber = confirm("Would you like to include numbers in your password?")

  var allowSymbol = confirm("would you like to include symbols '!@#$%^&*()' in your password?")


  while (allowLower === false && allowUpper === false && allowNumber === false && allowSymbol) {
    alert(" Must include at least one character, symbol, or number ");
    var allowUpper = confirm("Would you like to include uppercase characters in your password?");

    var allowLower = confirm("Would you like to include lowercase characters in your password?");

    var allowNumber = confirm("Would you like to include numbers in your password?");

    var allowSymbol = confirm("would you like to include symbols '!@#$%^&*()' in your password?");

  };

  // create arrays for uppercase, lowercase, numbers, symbols

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


  let password = "";
  let userSelection = [];

  // // if statements

  if (allowUpper) {
    userSelection = userSelection.concat(uppercase);
    password += getRandomchar(uppercase);
  }
  if (allowLower) {
    userSelection = userSelection.concat(lowercase);
    password += getRandomchar(lowercase);
  }
  if (allowNumber) {
    userSelection = userSelection.concat(numbers);
    password += getRandomchar(numbers);
  }
  if (allowSymbol) {
    userSelection = userSelection.concat(symbols);
    password += getRandomchar(symbols);
  }
  for (var i = password.length; i < passwordLength; i++) {
    password += getRandomchar(userSelection);
  }
  console.log(userSelection);
  return (password);
}

function getRandomchar(chosenChar) {
  var newIndex = Math.floor(Math.random() * chosenChar.length);
  return (chosenChar[newIndex]);
}





///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////
