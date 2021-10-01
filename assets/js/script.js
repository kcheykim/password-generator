// Assignment Code
var generateBtn = document.querySelector("#generate");

if (generateBtn) {
  var pwLength = window.prompt("Enter the length of your password (8 - 128): ");
  if(pwLength < 8 || pwLength > 128){
    window.prompt("Please hit the button again to enter a value between 8 - 128. Good-bye!");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomNum() {
  var x = Math.floor(Math.random()*10);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
