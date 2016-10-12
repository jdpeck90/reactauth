/******************************************************************************
Write a function myForEach(arr, cb) that accepts an array and a callback. This
should behave just like Array#forEach. Passing the callback every element, its
corresponding index, and the array itself. It should return undefined. DO NOT USE
THE BUILT IN ARRAY#FOREACH METHOD
Example
> myForEach([5,12,-3], function(ele, i, arr){
..  console.log(ele + " is at position " + i + " in array " + arr);
..})
5 is at position 0 in array [5,12,-3]
12 is at position 1 in array [5,12,-3]
-3 is at position 2 in array [5,12,-3]
undefined //return value
******************************************************************************/
console.log("----------myForEach--------------")

var myForEach = function(arr, cb) {
  for(var i = 0; i < arr.length; i++){
    cb(arr[i], i, arr)
  }
}
console.log("--Correct Anwser is 5 is at position 0 in array [5,12,-3] --")
console.log("--Correct Anwser is 12 is at position 1 in array [5,12,-3] --")
console.log("--Correct Anwser is -3 is at position 2 in array [5,12,-3] --")
console.log(myForEach([5,12,-3], function(ele, i, arr){console.log(ele + " is at position " + i + " in array " + arr);}))
/******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback. This
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of arr for which the given callback
returns a truthy value. Feel free to use your myForEach function you wrote earlier.
Example
> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return ele % 2 === 0;
..})
[13, -22] //return value

> mySelect([5,12,-22,-3], function(ele, i, arr){
..  return i % 2 === 0;
..})
[5, -22] //return value
******************************************************************************/
console.log("----------mySelect--------------")

var mySelect = function(arr, cb) {
  var array = [];

  for(var i = 0; i < arr.length; i++){
    var ele = arr[i];
    cb(ele, i, arr);

    if(cb(ele, i, arr)){
      array.push(arr[i]);
    }
  }

  return array;
}

console.log("-----------------Correct Anwser is [12, -22]--------------------------")
console.log(myForEach([5,12,-3], function(ele, i, arr){console.log(ele + " is at position " + i + " in array " + arr);}))

console.log("-----------------Correct Anwser is [5, -22]--------------------------")
console.log(mySelect([5,12,-22,-3], function(ele, i, arr){return i % 2 === 0;}))

/******************************************************************************
Write a function inPigLatin(sentence) that translates a sentence into its pig
latin equivalent. The rules for the translation are as follows:

1) For words that begin with consonant sounds, all letters before the initial
vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
  Examples
  "pig" → "igpay"
  "banana" → "ananabay"
  "trash" → "ashtray

2) For words that begin with vowel sounds, just adds "yay" to the end
  Examples
  "eat" → "eatyay"
  "omelet" → "omeletyay"
  "are" → "areyay"

!!! Words that were originally caplitailzed must remained caplitailzed
!!! Assume no punctuation
!!! 'y' is not a vowel

Examples:
> inPigLatin("Shmanthony is the best teacher")
Anthonyshmay isyay ethay estbay eachertay

> inPigLatin("let us Dance")
etlay usyay Anceday

> inPigLatin("this is the time of my life")
isthay isyay ethay imetay ofyay myay ifelay
*******************************************************************************/
console.log("----------inPigLatin--------------")

var isVowel = function(firstLetter){
  var vowels = ["a", "e", "i", "o", "u"]
  return vowels.indexOf(firstLetter) !== -1;
}

var piggifyWord = function(word){
  var vowels = ["a", "e", "i", "o", "u"]
  var firstLetter = word[0];
  if (isVowel(firstLetter)){
    return word + "yay";
  } else {
    for (var i = 0; i < word.length; i++){
      var letter = word[i];
      if (isVowel(letter)){
        var frontHalf = word.slice(0, i);
        var backHalf = word.slice(i);
        return backHalf + frontHalf + "ay";
      }
    }
    return word + "ay"
  }
}

var matchCap = function(oldWord, newWord){
  var firstLetter = oldWord[0];
  console.log(newWord)
  if(firstLetter === firstLetter.toUpperCase()){
    return newWord[0].toUpperCase() + newWord.slice(1).toLowerCase();
  } else {
    return newWord;
  }
}

var inPigLatin = function(sentence){
  var pigLatinSentence = [];
  var sentenceArray = sentence.split(' ');

  myForEach(sentenceArray, function(word){
    var pigLatinWord = piggifyWord
    pigLatinSentence.push(matchCap(word,pigLatinWord));

  })
  return pigLatinSentence.join(" ");
}

console.log("--Correct Anwser is: Anthonyshmay isyay ethay estbay eachertay------")
console.log(inPigLatin("Shmanthony is the best teacher"))
console.log("--etlay usyay Anceday--")
console.log(inPigLatin("let us Dance"))
console.log("--isthay isyay ethay imetay ofyay myay ifelay--")
console.log(inPigLatin("this is the time of my life"))


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  mySelect : mySelect,
  myForEach : myForEach,
  inPigLatin : inPigLatin
};
