/******************************************************************************
** Write a function royalWe(sentence) that returns an string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

function royalWe(sentence){
  var result = [];
  var splitSent = sentence.split(" ");
  var search = ["I", "mine", "my", "me"];

  for(var i = 0; i < splitSent.length; i++){
    var element = splitSent[i];

    if(search.indexOf(element) !== -1){

      if(element === "I"){
        var replaced = "we";
        result.push(replaced);
      }
      else if(element === "mine"){
        var replaced1 = "ours";
        result.push(replaced1);
      }
      else if(element === "my"){
        var replaced2 = "our";
        result.push(replaced2);
      }
      else if(element === "me"){
        var replaced3 = "us";
        result.push(replaced3);
      }
    }
   else { result.push(element);
   }
  }

  return result.join(" ");
}

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){
  var obj = {};

  for(var i = 0; i < array.length; i++){
    var element = array[i];

    if(obj[element] === undefined){
      obj[element] = 1;
    } else { obj[element]++;
      }
  }

  return obj;
}

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.
** Don't use Array#reverse.
** Examples:
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){
  var selection = [];

  for(var i = end-1; i > start; i--){
    selection.push(i);
  }

  return selection;
}
/* I had a few minutes until the end of the test so I thought I would try a different
way to get the anwser


function reverseRange2(start, end){
  var selection = [];

 for(var i = start + 1; i < end; i++){
   selection.unshift(i);
 }
 
  return selection
}

*/

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  var selection = [];
  var splitSent = sentence.split(" ");

  for(var i = splitSent.length-1; i >= 0; i--){
    var word = splitSent[i];
    selection.push(word);
  }

  return selection.join(" ");
}

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/

function magicNumbers(max){
  var selection = [];

  for(var i = 0; i < max; i++){
    if((i % 4 === 0 && i % 6 !== 0) || (i % 4 !== 0 && i % 6 === 0))
    selection.push(i);
  }

  return selection;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  reverseRange : reverseRange,
  royalWe : royalWe,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  magicNumbers : magicNumbers
};
