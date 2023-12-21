var generateBtn = document.querySelector("#generate");
var symbols = "!@#$%^&*";
var numbers = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
    var userChar = "";
    var generatedPassword = "";

    var length = prompt("Enter the password length (between 8 and 128 characters)");

    while (length < 8 || length > 128 || isNaN(length)) {
        length = prompt("Please enter a valid password length (between 8 and 128 characters)");
    }

    var confirmSymbol = confirm("Do you want to include symbols?");
    var confirmNumbers = confirm("Do you want to include numbers?");
    var confirmLowercase = confirm("Do you want to include lowercase letters?");
    var confirmUppercase = confirm("Do you want to include uppercase letters?");

    if (confirmSymbol) {
        userChar += symbols;
    }
    if (confirmNumbers) {
        userChar += numbers;
    }
    if (confirmLowercase) {
        userChar += lowercase;
    }
    if (confirmUppercase) {
        userChar += uppercase;
    }

    for (var i = 0; i < length; i++) {
        generatedPassword += userChar[Math.floor(Math.random() * userChar.length)];
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = generatedPassword;
}

generateBtn.addEventListener("click", generatePassword);