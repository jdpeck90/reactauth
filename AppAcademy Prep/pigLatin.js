function myForEach(array, cb) {
  for (var i = 0; i < array.length; i++){
    cb(array[i], i, array);
  }
}

function isVowel(letter) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.indexOf(letter) !== -1;
}


function wordInPigLatin(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = word[0];
  if (isVowel(firstLetter)) {
    return word + "yay";
  } else {
    for (var i = 0; i < word.length; i++){
      var letter = word[i];
      if (isVowel(letter)) {
        var firstHalf = word.slice(0, i);
        var lastHalf = word.slice(i);
        return lastHalf + firstHalf + "ay";
      }
    }
    return word + "ay";
  }
}

function inPigLatin(sentence) {
  var seperatedSentence = sentence.split(" ");
  var selection = [];

myForEach(seperatedSentence, function (word) {
  var pigLatinWord = wordInPigLatin(word);
  selection.push(pigLatinWord)
})

  return selection.join(" ");
}
