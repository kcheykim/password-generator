// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = null;
var numeric = null;
var special = null;
var upper = null;
var lower = null;


//this function gives the users choices of numeric, special character, uppercase or lowercase letters in their password
function getChoices() {
  //get user input on the length of pass that is between 8 to 128
  if (generateBtn) {
    length = window.prompt("Enter the length of your password (8 - 128): ");
    while(length < 8 || length > 128){
      length = window.prompt("Please enter a length between 8 - 128 characters long: ");
    }
  }

  //get user input on whether the password contains numeric values
  numeric = prompt("Do you want numeric value in your password: Enter '0' - No and '1' - Yes");
  while(!(numeric == 1 || numeric == 0)){
    numeric = prompt("Please enter '1' for numeric values or '0' for no numeric value in your password. ");
  }

  //get user input on whether the passowrd contains special characters
  special = prompt("Do you want special character in your password: Enter '0' - No and '1' - Yes");
  while(!(special == 1 || special == 0)){
    special = prompt("Please enter '1' for special character or '0' for no special character in your password. ");
  }

   //get user input on whether the passowrd contains uppercase letters
   upper = prompt("Do you want uppercase letter in your password: Enter '0' - No and '1' - Yes");
   while(!(upper == 1 || upper == 0)){
     upper = prompt("Please enter '1' for uppercase letter or '0' for no uppercase letter in your password. ");
   }

  //get user input on whether the passowrd contains lowercase letters
  lower = prompt("Do you want lowercase letter in your password: Enter '0' - No and '1' - Yes");
  while(!(lower == 1 || lower == 0)){
    lower = prompt("Please enter '1' for lowercase letter or '0' for no lowercase letter in your password. ");
  }
}
  
// Write password to the #password input
function writePassword() {
  getChoices();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function getRandomNum() {
  var x = Math.floor(Math.random()*10);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

