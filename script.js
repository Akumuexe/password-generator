// Assignment code here
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var number = [0, 1, 2 ,3 ,4 ,5 ,6, 7, 8, 9];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', "*", '(', ')', "_", "-", '?', "<", ">", "+", "=", "`", "~", "/",];

// variables to create the generated passwords

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  confirmLength = prompt("How long do you want your password to be?");

  if (confirmLength < 7|| confirmLength >= 129) {
    alert('Your password must be between 8 to 128 charactlers long!');
    return false;
  }
  else (confirmLength >= 8 || confirmLength >= 128); 
}

var confirmBigCase = confirm('Please select Yes or No if you would like a uppercase character.');
var confirmSmallCase =confirm('Please select Yes or NO if you would like a lowercase character.');
var confirmNumberChar = confirm('Please select Yes or No if you would like a number character.');
var   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
