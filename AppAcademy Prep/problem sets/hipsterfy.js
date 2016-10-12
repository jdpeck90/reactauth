/****************************************************************
Write a function hipsterfy(sentence) that takes takes a string
containing several words as input. Remove the last vowel from
each word. 'y' is not a vowel.

> hipsterfy("proper");
"propr"

> hipsterfy("proper tonic panther");
"propr tonc panthr"

> hipsterfy("towel flicker banana");
"towl flickr banan"

> hipsterfy("runner anaconda");
"runnr anacond"

> hipsterfy("turtle cheeseburger fries");
"turtl cheeseburgr fris"
****************************************************************/

function hipsterfy(sentence) {
  var selection = [];
  var splitSent = sentence.split(" ");
  for (var i = 0; i < splitSent.length; i++){
    var word = splitSent[i];

    selection.push(changeWord(word));
    console.log(selection)
  }

  return selection;
}


function changeWord(word){
  var vowels = ["a", "e", "i", "o", "u"]

  for (var i = word.length; i > 0; i--){
    var letters = word[i];

    if(vowels.indexOf(letters) !== -1){
      var hipsterWord = word.slice(0,i) + word.slice(i+1);

      return hipsterWord;
    }
  }
}

console.log(hipsterfy("turtle cheeseburger fries"));
