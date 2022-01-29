// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordlength = undefined;
var userNumbers = undefined;
var userSpecial = undefined;
var userUpperCase = undefined;
var userLowerCase = undefined;

var lowerCase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
var numbers = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`];
var upperCase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
var special = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `_`, `+`, `-`, `=`, `~`];

function generatePassword() {
var userImput =  parseInt(prompt("Please eneter the desiered length of password between 8 and 128 characters."));

// this is the lenght part to the password

if (8 > userImput || userImput > 128) {
  window.alert("Please enter a valid number between 8 and 128.")
} else {
passwordlength = userImput;
  window.alert("your password will be " + passwordlength + " characters long.")
};
console.log(userImput);

// this is the numbers prompt
userNumbers = window.confirm("Would you like to have numbers?");
console.log(userNumbers);

// this is the special prompt
userSpecial = window.confirm("Would you like to have Specail characters?");
console.log(userSpecial);

// this is the lowercase
userLowerCase = window.confirm("Would you like to have Lower case characters?");
console.log(userLowerCase);

// this is the uppercase
userUpperCase = window.confirm("Would you like to have Upper case characters?");
console.log(userUpperCase);















return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



