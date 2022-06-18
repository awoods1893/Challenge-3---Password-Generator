// Assignment code here
var length = Number(prompt("Enter a password length between 8 and 128"));

//Checks if the user input a number. Function will not proceed unless a number is entered here.
while (isNaN(length)){
  var length = Number(prompt("This is not a number. Please enter password length between 8 and 128"));
}

//Checks to see if the number entered is between the required parameters. Function will not proceed unless this requirement is met.
while (length < 8 || length > 128){
  var length = Number(prompt("Length of password must be between 8 and 128 characters. Please re-enter a password length."));
}
 
//Prompts for the user to customize their password
 var charType = prompt("Are you using a lowercase letter? Y or N?").toLowerCase();
 var charType1 = prompt("Are you using an uppercase letter? Y or N?").toLowerCase();
 var charType2 = prompt("Are you using a number? Y or N?").toLowerCase();
 var charType3 = prompt("Are you using a special character? Y or N?").toLowerCase();
 var password = generatePassword();
document.getElementById('password').value = password;
document.getElementById('generate').addEventListener('click', copyPassword);

function generatePassword() { 
  
  //lists of the different character selections the function can choose from
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };

  //variables to hold the user's customization choices
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var charSet1 = charSets[charType1.toLowerCase()] || charSets.uppercase;
  var charSet2 = charSets[charType2.toLowerCase()] || charSets.numeric;
  var charSet3 = charSets[charType3.toLowerCase()] ||charSets.special;
  var retVal = "";
  var userPassword = "";


  //If statements to determine if the user picks yes or no for each customization option
  //Need to add some sort of check here to determine if the user enters "no" then the option isn't added to the password 
  if (charType === "y" || charType ==="yes"){
    retVal += charSet;
  }
  else{
    retVal;
  }
  if (charType1 === "yes" || charType1 === 'y'){
    retVal += charSet1;
  }
  else{
    retVal;
  }
  if(charType2 === "yes" || charType2 ==='y'){
    retVal += charSet2;
  }
  else{
    retVal;
  }
  if (charType3 === "yes" || charType3 === 'y'){
    retVal += charSet3;
  }
  else{
    retVal;
  }

  //randomizes the selections and creates the password based on length and character choices
  for (var i = 0; i < length; i++) {
    userPassword +=  retVal.charAt(Math.floor(Math.random() * retVal.length));
  }
  return userPassword;
}

//copies the newly generated password to the clipboard
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
