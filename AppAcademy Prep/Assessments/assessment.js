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
console.log("------myIndexOf-------")
var myIndexOf = function(array, ele){
  var selection = [];

  for (var i in array){ ///Looping through the array to find a match

    if (ele === array[i]){ ///If the element in the array find a match the the "ele" variable
      selection.push(array[i]) ///Push that variable into the selection array
    } else {
    selection.push(-1) /// Else push a -1 into the array
    break;
    }
  }


return selection
}

console.log("------Correct anwser is 4 -------")
console.log(myIndexOf([1,2,3,4,5], 5), "test1")
console.log("------Correct anwser is 0 -------")
console.log(myIndexOf(["a", "b", "c"], "a"), "test2")
console.log("------Correct anwser is -1-------")
console.log(myIndexOf(["a", "b", "c"], "d"), "test3")


/******************************************************************************
** Write a function minMaxProduct(array) that returns the product between the
** largest value and the smallest value in the array. Assume `array` is an array of
** numbers. Assume an array of at least two numbers.
** Examples:
** minMaxProduct([0,1,2,3,4,5]) => 0
** minMaxProduct([5,4,3,2,1]) => 5
** minMaxProduct([4,2,5,1,-5]) => -25
*/
console.log("---------minMaxProduct-------")
var minMaxProduct = function(array){
  var min = array[0];
  var max = array[1];
  var result = 0;

  for(var i in array){ /// Loop through the array
    if (min > array[i]){ /// If statement to find min
        min = array[i];
    }

    if(max < array[i]){ /// If statement to find max
       max = array[i];
    }
  }

  result = min * max
  return result;
}

console.log("------Correct anwser is 0 -------")
console.log(minMaxProduct([0,1,2,3,4,5]), "test1")
console.log("------Correct anwser is 5 -------")
console.log(minMaxProduct([5,4,3,2,1]), "test2")
console.log("------Correct anwser is -25-------")
console.log(minMaxProduct([4,2,5,1,-5]), "test3")


/******************************************************************************
** Write a function leastCommonMultiple(num1, num2) that returns the
** lowest number which is a multiple of both inputs.
** Examples:
** leastCommonMultiple(2, 3) => 6
** leastCommonMultiple(6, 10) => 30
** leastCommonMultiple(24, 26) => 312
*/
console.log("------leastCommonMultiple-------")
var leastCommonMultiple = function (num1, num2){
  var lCM = num1
  var counter = 1
  while(lCM % num2 !== 0){ ///This loop will increment the
    lCM = num1 * counter
    counter++
  }
  return lCM
}
console.log("------Correct anwser is 6 -------")
console.log(leastCommonMultiple(2, 3), "test1")
console.log("------Correct anwser is 30 -------")
console.log(leastCommonMultiple(6, 10), "test2")
console.log("------Correct anwser is 312 -------")
console.log(leastCommonMultiple(24, 26), "test3")

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

console.log("-----------------arraysSumN------------------")
var arrSum = function(innerArray){ ///This function adds up all
  var total = 0;                   //the elements of each inner array

    for(var i in innerArray){      //Loops through inner Arrays & adds up the sums
      total += innerArray[i];
    }

  return total;                    ///Returns the sum of each arrau to arraysSumN
}

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



var ary1 = [ [0, 1], [2, 2, 0], [3, -2] ];
var ary2 = [ [3, 2, 1], [100], [0, 1, 2, 3, 100], [6] ];

console.log("------Correct anwser is [ [0, 1], [3, -2]  -------")
console.log(arraysSumN(ary1, 1), "test1")
console.log("------Correct anwser is [ [3, 2, 1], [6] ] -------")
console.log(arraysSumN(ary2, 6), "test2")



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



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  leastCommonMultiple : leastCommonMultiple,
  myIndexOf : myIndexOf,
  magicCipher : magicCipher,
  minMaxProduct : minMaxProduct,
  arraysSumN : arraysSumN
};
