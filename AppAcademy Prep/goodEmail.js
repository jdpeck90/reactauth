function isAlphabetic(character){
  var alphabet = [
  "a","b","c","d","e",
  "f","g","h","i","j",
  "k","l","m","n","o",
  "p","q","r","s","t",
  "u","v","w","x","y",
  "z"
];
  return (alphabet.indexOf(character) !== -1)
}

function isNumeric(character){
  var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];
  return (numbers.indexOf(character) !== -1);
}

function isAlphanumeric(character){
  return (isNumeric(character) || isAlphabetic(character))
}


function isValidEmail(email){
  var emailParts = email.split('@');
  console.log(emailParts)
  if(emailParts.length !== 2){
    return false;
  }

  var firstPart = emailParts[0];
  var secondPart = emailParts[1];

  for(var i =0; i<firstPart.length; i++){
    var character = firstPart[i];
    console.log(character)
    if(!isAlphanumeric(character) && character !== "_" && character !== "."){
      return false;
    }
  }

  if(secondPart.split(".").length !== 2) {
    return false;
  }

 for (var j=0; j< secondPart.length; j++){
   var character = secondPart[j];
   if(!isAlphabetic(character) && character !== "."){
     return false
   }
 }
 return true
}

console.log("Test 1: junk@gmail.com");
console.log("Expected: true");
console.log(isValidEmail("junk@gmail.com"));
console.log("-----------------------------");

console.log("Test 2: now.what@now.co");
console.log("Expected: true");
console.log(isValidEmail("now.what@now.co"));
console.log("-----------------------------");

console.log("Test 3: i_am_happy@feelings.net");
console.log("Expected: true");
console.log(isValidEmail("i_am_happy@feelings.net"));
console.log("-----------------------------");

console.log("Test 4: my@website@gmail.com");
console.log("Expected: false");
console.log(isValidEmail("my@website@gmail.com"));
console.log("-----------------------------");

console.log("Test 5: webby@gmail.co.net");
console.log("Expected: false");
console.log(isValidEmail("webby@gmail.co.net"));
console.log("-----------------------------");

console.log("Test 6: anthony@ira_ladson.com");
console.log("Expected: false");
console.log(isValidEmail("anthony@ira_ladson.com"));
console.log("-----------------------------");

console.log("Test 7: anthony!@ladson.com");
console.log("Expected: false");
console.log(isValidEmail("anthony!@ladson.com"));
console.log("-----------------------------");
