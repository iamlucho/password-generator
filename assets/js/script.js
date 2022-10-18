// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare variables
//Set each string for the characters to be used with parameters chosen by user.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to generate password using the desired length and characters string from user prompts.
function generatePassword(length, characters){
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

//Function to get password length and characters to be used.
function passwordcharacters(){
  let passwordstring = "";
  while(passwordstring.length<1){
    var includeSpecial = confirm("Click OK if SPECIAL characters should be included in the password.");
    var includeNumber = confirm("Click OK if NUMERIC characters should be included in the password.");
    var includeLower = confirm("Click OK if Uppercase characters should be included in the password.");
    var includeUpper = confirm("Click OK if Lowercase characters should be included in the password.");
    if(includeSpecial) {
      passwordstring += symbols;
    }
    if(includeNumber) {
      passwordstring += numbers;
    }
    if(includeLower) {
      passwordstring += lowercase;
    }
    if(includeUpper) {
      passwordstring += uppercase;
    }
    if(passwordstring.length == 0) {
      alert("Please chose at least one type of character to be included.");
    }
  }
  return passwordstring;
}

//Function to ask user for password length
function PasswordLength() {
  var passlength=0;
  var lengthcheck=false;

  while(!valid){
    passlength = parseInt(window.prompt("Enter desired password length between 8-128 characters:"));
    
    if(passlength >=8 && passlength <= 128){
      lengthcheck=true;
      return passlength;
    }
    else{
      window.alert("Password must be more than 8 characters and less than 128 characters.");
    }
  }

}