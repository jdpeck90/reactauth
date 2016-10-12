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
console.log("------myIndexOf-------");
var myIndexOf = function(array, ele){  //This function will find what index # the specified element is at
  var selection = [];//Feedback: Could just be: selection = [-1]
  selection.push(-1);
//Feedback: Newline here
  for (var i in array){ ///Looping through the array to find a match

      if (ele == array[i]){
        selection.splice(0);///If the element in the array finds a match this will kick out the -1
        selection.push(i); ///Push that variable into the selection array
      }
  }

  return selection;
};

//Feedback: Ok that was different
//how about this instead
//
//function indexofMine(arr, needle){
//for (Var i in arr){ if (arr[i] == needle) return i }
//return -1
//}

console.log("------Correct anwser is 4 -------");
console.log(myIndexOf([1,2,3,4,5], 5), "test1");
console.log("------Correct anwser is 0 -------");
console.log(myIndexOf(["a", "b", "c"], "a"), "test2");
console.log("------Correct anwser is -1-------");
console.log(myIndexOf(["a", "b", "c"], "d"), "test3");


/******************************************************************************
** Write a function minMaxProduct(array) that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Examples:
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
console.log("---------minMaxProduct-------");
var minMaxProduct = function(array){ // This function will find the product of the smallest
  var min = array[0];                // & largerest integer
  var max = array[1];
  var result = 0;//Feedback: You can use commas for multiple variable declaration

  for(var i in array){ /// Loop through the array
    var ele = array[i]
    min = Math.min(min, ele) /// If statement to find min
    max = Math.max(max, ele) /// If statement to find max
//Feedback: ^^^^--- Nice!
  }

  result = min * max;//Feedback: No point in making result
  return result;//Feedback: Just return min * max
};

console.log("------Correct anwser is 0 -------");
console.log(minMaxProduct([0,1,2,3,4,5]), "test1");
console.log("------Correct anwser is 5 -------");
console.log(minMaxProduct([5,4,3,2,1]), "test2");
console.log("------Correct anwser is -25-------");
console.log(minMaxProduct([4,2,5,1,-5]), "test3");


/******************************************************************************
** Write a function leastCommonMultiple(num1, num2) that returns the
** lowest number which is a multiple of both inputs.
** Examples:
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/

console.log("------leastCommonMultiple-------");
var leastCommonMultiple = function (num1, num2){ //This function will find the lowest possible common
  var lCM = num1;                                 // multiple
  var counter = 1;

  while(lCM % num2 !== 0){ ///This loop will increment num1 by a counter that will increment by 1 each loop
    lCM = num1 * counter;
    counter++;
  }

  return lCM;
};
console.log("------Correct anwser is 6 -------");
console.log(leastCommonMultiple(2, 3), "test1");
console.log("------Correct anwser is 30 -------");
console.log(leastCommonMultiple(6, 10), "test2");
console.log("------Correct anwser is 312 -------");
console.log(leastCommonMultiple(24, 26), "test3");


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

console.log("-----------------arraysSumN------------------");
var arrSum = function(innerArray){ ///This function adds up all
  var total = 0;                   //the elements of each inner array

    for(var i in innerArray){      //Loops through inner Arrays & adds up the sums
        total += innerArray[i];
    }

  return total;                    ///Returns the sum of each arrau to arraysSumN
};

var arraysSumN = function(array, n){ ///This function will collect the inner array sums
  var selection = [];               /// from the arrSum function and push the appropriate
                                    /// arrays into the selection array
  for(var i in array){              /// <-- Loops through outter arrays
      var innerArray = array[i];

    if(arrSum(innerArray) === n){   ///This if statement decides whether the array sum
      selection.push(innerArray);   ///should be pushed into the empty selection array
    }
  }

  return selection;
};

// eat your
var summarray = array => array.reduce((accum, current) => accum + current);
// heart out
var arraySumN2 = (arr, n) => arr.reduce((accum, current, index, array) => (current + array[i + 1] === n ? accum + 1 : accum), 0 );



var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];

console.log("------Correct anwser is [ [0, 1], [3, -2]  -------");
console.log(arraysSumN(ary1, 1), "test1");
console.log("------Correct anwser is [ [3, 2, 1], [6] ] -------");
console.log(arraysSumN(ary2, 6), "test2");


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
console.log("-----------------magicCipher------------------");
var magicCipher = function(sentence, cipher){
  var magicSentence = "";                   // Defining a string to store a new cipher sentence

      for(var i in sentence){                 //Looping through the sentence
          var letter = sentence[i];             //Accessing each letter

          if(cipher[letter]){                 //If the value has a matching key
          magicSentence += cipher[letter]    //Push the cipher letter into the new sentence
          } else {                            // else
          magicSentence += letter          //Push the original letter into the new sentence
          }
      }

  return magicSentence                  //Return sentence
}

console.log("------cqq me on fccebook-------");
console.log(magicCipher("add me on facebook" , { a : "c", d : "q"}));
console.log("------where are you!-------");
console.log(magicCipher("where are you?" , { v : "l", '?' : "!"}));
console.log("------dance-------");
console.log(magicCipher("twmce" , { m : "n", t : "d", w : "a"}));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  arraysSumN : arraysSumN
};
