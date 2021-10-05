//declare global variables
var generateBtn = document.querySelector("#generate");



//this function gives the users choices of numeric, special character, uppercase or lowercase letters in their password
function getChoices() {
  var genPassWd = "";

  //local variable for password length
  var pwLength = 0;

  //counter set increase as it check the users for the choices 
  var counter = 0;
  //empty string to concatenate the choices to one whole string
  var randomString = "";

  //get user input on the length of pass that is between 8 to 128
  if (generateBtn) {
    var pwLength = window.prompt("Enter the length of your password (8 - 128): ");
    while(pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        pwLength = window.prompt("Please re-enter a length between 8 - 128: ");
      }
  }
  
  //counter will keep track of the number of choices but if it is zero,
  //  it will go repeat all choices until at least one valid choice gets selected
  while(counter == 0){

    //check if user would like numeric values in password
    //true: add random number to genPassWd by calling getRandomNum function,
    //      add all numeric values to randomString, increase counter
    var numeric = prompt("Do you want numeric value in your password: Enter '1' for Yes");
    if(numeric == 1){
      genPassWd += getRandomNum();
      randomString += "0123456789";
      counter++;
    }

    //check if the user would like special characters in password
    //true: add random special character to genPassWd by calling getRandomChars function,
    //      add all special character to randomString, increase counter
    var special = prompt("Do you want special character in your password: Enter '1' for Yes");
    if(special == 1){
      genPassWd += getRandomChars();
      randomString += "~!@#$%^&*()_+{}|:'<>?`-=[]\;,./";
      counter++;
    }

    //check if the user would like uppercase letters in password
    //true: add random uppercase letter to genPassWd by calling getRandomUpper function,
    //      add all uppercase letters to randomString, increase counter
    var upper = prompt("Do you want uppercase letter in your password: Enter '1' for Yes");
    if(upper == 1){
      genPassWd += getRandomUpper();
      randomString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      counter++;
    }

    //check if the user would like lowercase letters in password
    //true: add random lowercase letter to genPassWd by calling getRandomLower function,
    //      add all lowercase letters to randomString, increase counter
    var lower = prompt("Do you want lowercase letter in your password: Enter '1' - Yes");
    if(lower == 1){
      genPassWd += getRandomLower();
      randomString += "abcdefghijklmnopqrstuvwxyz";
      counter++;
    }
  }
  //reseting the lenght to length - counter (# of choice between 1-4)
  pwLength = pwLength - counter;

  //calling generatePassword function - passing it the newlenght and the randomString
  return generatePassword(pwLength, randomString, genPassWd);
 
}

//function to generate random numeric value
function generatePassword(pwdLen, rString, genPassWd) {
  for(var i = 0; i < pwdLen; i++) {
    genPassWd += rString[Math.floor(Math.random() * rString.length)]; 
    console.log(genPassWd);
  }
  return genPassWd;
}


//function to generate random numeric value
function getRandomNum() {
  return String.fromCharCode(Math.floor(Math.random()*10) +48);
}

//function to generate lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//function to generate uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//function to generate special character
function getRandomChars() {
  var sChars = '~!@#$%^&*()_+-={}|:"<>?[]\;,./';
  return sChars[Math.floor(Math.random() * sChars.length)];
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  var password = "";
  password = getChoices();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
