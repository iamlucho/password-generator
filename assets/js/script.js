// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare variables
//Set each string for the characters to be used with parameters chosen by user.
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_+=";

// Write password to the #password input
function writePassword() {

  var passlengthbyuser = PasswordLength();
  var passcharsbyuser = passwordcharacters();
//Create REGEX for character comparison, this way we ensure the password has desired characters.
  var regexstring = new RegExp(passcharsbyuser[1]);
  
  var password = generatePassword(passlengthbyuser,passcharsbyuser[0]);
//The following while loop ensures that the password has the required characters. 
//Because of probability, it's possible for the password to fail to choose required characters.
  while(!regexstring.test(password)){
    password = generatePassword(passlengthbyuser,passcharsbyuser[0]);
  }
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
//It includes all the prompts needed to get user options for the characters.
//Creates the string of characters to select from and the REGEX string based on user options.
function passwordcharacters(){
  let passwordstring = "";
  let regexstring = "^";
  while(passwordstring.length<1){
    var includeSpecial = confirm("Click OK if SPECIAL characters should be included in the password.");
    var includeNumber = confirm("Click OK if NUMERIC characters should be included in the password.");
    var includeLower = confirm("Click OK if LOWERCASE characters should be included in the password.");
    var includeUpper = confirm("Click OK if UPPERCASE characters should be included in the password.");
    if(includeSpecial) {
      passwordstring += symbols;
      regexstring += "(?=.*[!@#$%^&*_+=])";
    }
    if(includeNumber) {
      passwordstring += numbers;
      regexstring += "(?=.*[0-9])";
    }
    if(includeLower) {
      passwordstring += lowercase;
      regexstring += "(?=.*[a-z])";
    }
    if(includeUpper) {
      passwordstring += uppercase;
      regexstring += "(?=.*[A-Z])";
    }
    if(passwordstring.length == 0) {
      alert("Please chose at least one type of character to be included.");
    }
  }
  return [passwordstring, regexstring];
}

//Function to ask user for password length
//Asks the user to enter a desired length. It also checks if the entry is valid.
function PasswordLength() {
  var passlength=0;
  var lengthcheck=false;

  while(!lengthcheck){
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