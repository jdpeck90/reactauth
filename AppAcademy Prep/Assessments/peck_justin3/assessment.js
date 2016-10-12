/******************************************************************************
** Write a function #divisibleByFivePairSum(array), that takes an array of numbers.
** It should return an array of all the pairs of indices whose sum is a multiple of five.
** Example
** divisibleByFivePairSum([1, 5, 2, 0, 4]) => [ [ 0, 4 ], [ 1, 3 ] ]
** divisibleByFivePairSum([13, 22, 8, -3, 12]) => [[0, 1], [0, 3], [0, 4], [1, 2], [2, 3], [2, 4]]
*/

function divisibleByFivePairSum(array){
 var selection = [];

 for (var i = 0; i < array.length; i++){
   var element1 = array[i];

   for (var j = i + 1; j < array.length; j++){
     var element2 = array[j];
     var sum = element2 + element1;

    if (sum % 5 === 0){
      selection.push([i,j]);
    }//Feedback: Shoudl be indenting by more than 1 space
   }
 }
//Feedback: Newline here
 return selection;
}

/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects)
**
** DO NOT USE THE BUILT IN 'Array.prototype.indexOf' method!!!
**
** Example
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  for (var i = 0; i < array.length; i++){
    var element = array[i];

    if(element === ele){//Feedback: Or... if (array[i] === ele){ return i; }
      return i;
    }
  }
//Feedback: Newline here
  return -1;
}


/******************************************************************************
** Write a function #magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Example
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  var letters = sentence.split("");

  for (var i = 0; i < letters.length; i++ ){
   var letter = letters[i];

    if(cipher[letters[i]] !== undefined){
      letters[i] = cipher[letter];
    }
  }
//Feedback: Newline here
   return letters.join("");//Feedback: Indentation
}


/******************************************************************************
** Write a function `minMaxDifference(array)` that returns the difference between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Example
** minMaxDifference([1,2,3,4,5]) => 4
** minMaxDifference([5,4,3,2,1]) => 4
** minMaxDifference([4,2,5,1,-5]) => 10
*/
//Feedback: Please watch solution video for this
function minMaxDifference(array){
  var difference = 0;

  for( var i=0; i<array.length; i++){
    var element = array[i];
//Feedback: Newline here
      if(element < 0){
        difference -= 1;
        break;
    }
  }
//Feedback: Newline here
  result = array[array.length-1] - array[0];
  difference += result;

  return Math.abs(difference);
}

/******************************************************************************
** Write a function #dynamicFizzBuzz(max, num1, num2) that returns an array
** of numbers up to the max. Each number should be either divisible by num1 or num2,
** BUT NOT BOTH.
** Example
** dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
** dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*/
//Feedback: Nice one-line expression.
function dynamicFizzBuzz(max, num1, num2){
  var selection = [];

  for (var i = 0; i < max; i++){
    if ((i % num1 === 0 && i % num2 !== 0) || (i % num1 !== 0 && i % num2 === 0)){
      selection.push(i);
    }
  }

  return selection;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  divisibleByFivePairSum : divisibleByFivePairSum,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxDifference : minMaxDifference,
  dynamicFizzBuzz : dynamicFizzBuzz
};
