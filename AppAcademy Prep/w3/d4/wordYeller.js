var sent = "Stop it now! Please, wont you stop?";
wordYeller(sent);


function wordYeller(sentence){
  var yelledWords=[];
  var words = sentence.split(" ");
  var punctuation = [".", ",", "!", "?", ";", ":"]
  words.forEach(function(words){
  var lastCharacter = words.slice(-1)
  if(punctuation.indexOf(lastCharacter)!==-1){
  console.log(yelledWords.push(words))}
  else{
    yelledWords.push(words +"!")
  }
  });
    return yelledWords.join(" ");
  }
