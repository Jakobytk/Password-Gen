var generateBtn = document.querySelector("#generate");
var weirdNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var extras = "!@#$%^&*()_+=/?";
// variables created for creating password
var passwordText = document.getElementById("password");
var length = document.getElementById("length");
var Numb = document.getElementById("numbers");
var Symb = document.getElementById("generate");
// tells you what your password will consist of
var tagP = alert("characters must be between 8 and 128, with one number, one upper case, one lower case, and one symbol");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

function generatePassword() {



  generateBtn.addEventListener("click");
  
}

