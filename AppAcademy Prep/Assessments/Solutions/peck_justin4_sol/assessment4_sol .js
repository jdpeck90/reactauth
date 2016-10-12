/******************************************************************************
** Write a function #myIndexOf(array, ele) that takes an array and an element.
** Return the index of the element in the array, or -1 if it doesn't exist. Assume
** the `ele` will be a primitive data type (no arrays or objects). DO NOT USE
** Array.prototype.indexOf
** Examples:
** myIndexOf([1,2,3,4,5], 5) => 4
** myIndexOf(["a", "b", "c"], "a") => 0
** myIndexOf(["a", "b", "c"], "d") => -1
*/

function myIndexOf(array, ele){
  for (var i = 0; i < array.length; i++){
    var element = array[i];

    if(element === ele){//Feedback: No need to make element
      return i;
    }
  }
//Feedback: Newline here
  return -1
}

/******************************************************************************
** Write a function minMaxProduct(array) that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Examples:
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
function minMaxProduct(array){
  var min = array[0];
  var max = array[1];//Feedback: Should be array[0]

  for (var i = 0; i < array.length; i++){
    var element = array[i];//Feedback: Now is actually good time to use temp var

    if (min > element) {//Feedback: min = math.min(min, ele)
      min = element;
    }

    if (max < element){//Feedback: max = math.max(max, ele)
      max = element;
    }

  }

  return min * max;
}

/******************************************************************************
** Write a function leastCommonMultiple(num1, num2) that returns the
** lowest number which is a multiple of both inputs.
** Examples:
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

function leastCommonMultiple(num1, num2){
  var count = 0;
  var num = num1//Feedback: Missing semicolon
  var count = 1;

  while (num % num2 !== 0){
    num = num1 * count;
    console.log(num)//Feedback: Remove this
   count ++//Feedback: no spaces bewteen unary ops and their operants
  }
//Feedback: Newline here
  return num;
}

/***************************************************************************
** Write a function arraysSumN(ary, n) which takes as ary a 2-dimensional
** array and as n a number. ary is an array of arrays of numbers. The
** function returns a new array of the inner arrays whose elements sum to n.
** Example 1:
** var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
** var results1 = arraysSumN(ary1, 1);
** results1; // => [ [0, 1], [3, -2] ]
**
** Example 2:
** var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];
** arraysSumN(ary2, 6); // => [ [3, 2, 1], [6] ]
***************************************************************************/

function arraysSumN(ary, n) {
  var selection = [];
//Feedback: Newline here
  for (var i = 0; i < ary.length; i++){
    var innerArray = ary[i];
      var sum = 0;//Feedback: indentation
//Feedback: Newline here
      for (var j = 0; i <innerArray.length; i++){
         sum += innerArray[i]//Feedback: Missing semicolon
        console.log(sum)//Feedback: Remove this
      }

      if( sum  === n ){//Feedback: These spaces aren't correct in regards to style
        selection.push(innerArray)//Feedback: Missing semicolon
      }

  }
//Feedback: Unnecessary newline

return selection//Feedback: indentation, semicolon
}

/******************************************************************************
** Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
** and an object(cipher). Return a string where every character is replaced with its
** cooresponding value in the cipher. If the character doesn't exist in the
** cipher, use the character.
** Examples:
** magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
** magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
** magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*/

function magicCipher(sentence, cipher){
  var magicSentence = "";

  for (var i = 0; i < sentence.length; i++){
    var char = sentence[i]
//Feedback: Unnecessary newline

    if(cipher[char]){
      magicSentence += cipher[char]
    } else {
      magicSentence += char
    }
  }
//Feedback: Newline here
  return magicSentence
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  arraysSumN : arraysSumN
};
