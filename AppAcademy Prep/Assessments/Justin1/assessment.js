/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/

//Feedback: indent all this
function range(start, end){
var selection = [];

 for(var i=start; i<=end; i++){
 selection.push(i);
 }
//Feedback: Newline here
return selection;
}

//Feedback: Justin, here's your function with proper style. Every difference is deliberate
function rangeStyledRight(start, end){
    var selection = [];

    for(var i = start; i <= end; i++){
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
  var selection =[];//Feedback: selection = []. Need spaces around binary ops

//Feedback:        v--- needs spacing. i < array.length. Like, x + 3 NOT x+3. Spaces around 'binary' operators
  for (var i = 0; i<array.length; i++){
    var element = array[i];

    if (selection.indexOf(element) === -1){//Feedback: Spacing around === is good. It's also a binary operator
      selection.push(element);
    }
  }
//Feedback: Newline here
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

  //for(var i = 0; i < array.length; i++){//Feedback: <--- spaces right
  for(var i=0; i<array.length; i++){//Feedback: Put spaces around ALL binary ops.
    var element = array[i];
//Feedback: Newline here
    if(obj[element] === undefined) {
    obj[element] = 1;}//Feedback: This curly should be on a new line. It's hard to read like this. This isn't Python or Perl
    else { obj[element] += 1}//Feedback: You should break this into separate lines
  }
//Feedback: Newline here
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
//Feedback: Newline here
  reveresed.push(words)//Feedback: Missing semicolon
  }

var joinReverese = reveresed.join(" ")//Feedback: Missing semicolon
return joinReverese//Feedback: Missing semicolon
//Feedback: Unnecessary newline
}

//Feedback: Look at how I refactored and styled your code:
function reverseSentenceFixedStyl(sentence){
    var reveresed = [];
    var splitSentence = sentence.split(" ");

    for(var i = splitSentence.length - 1; i >= 0; i--){//Feedback: Look at spacing
        reveresed.push(splitSentence[i])//Feedback: <-- notice no temporary variables here
    }

    return reveresed.join(' ');//Feedback: Fixeed that 4 u
}

/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/
//Feedback: The logic here is fine; good job.
//          The style needs work though. Apply what I wrote earlier for future work.
function fizzBuzz(max){
  var fbSelection = [];
//Feedback: Newline here
 for(var i=0; i<max; i++){//Feedback: Spacing
   if((i%3 === 0 && i%5!==0)||(i%3 !== 0 && i%5===0)){
     fbSelection.push(i);
   }
 }
//Feedback: Newline here
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
