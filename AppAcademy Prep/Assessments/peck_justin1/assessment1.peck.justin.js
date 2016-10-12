/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

function range(start, end){
var selection = [];

 for(var i=start; i<=end; i++){
 selection.push(i);
 }
return selection;
}

/******************************************************************************
** Write a function unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining
** is unique.
** Example:
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){
  var selection =[];

  for (var i = 0; i<array.length; i++){
    var element = array[i];

    if (selection.indexOf(element) === -1){
      selection.push(element);
    }
  }
  return selection;
}

/******************************************************************************
** Write a function elementCount(array) that returns an object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.
** Example:
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){
  var obj = {};

  for(var i=0; i<array.length; i++){
    var element = array[i];
    if(obj[element] === undefined) {
    obj[element] = 1;}
    else { obj[element] += 1}
  }
  return obj;
}

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  var reveresed = [];
  var splitSentence = sentence.split(" ");

for(var i=splitSentence.length-1; i>=0; i--){
  var words = splitSentence[i];
  reveresed.push(words)
  }

var joinReverese = reveresed.join(" ")
return joinReverese

}


/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/
function fizzBuzz(max){
  var fbSelection = [];
 for(var i=0; i<max; i++){
   if((i%3 === 0 && i%5!==0)||(i%3 !== 0 && i%5===0)){
     fbSelection.push(i);
   }
 }
 return fbSelection;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
