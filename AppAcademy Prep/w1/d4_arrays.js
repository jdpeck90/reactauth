function logEach(array){

  for(var i = 0; i<array.length; i++){
    var element = array[i];
    console.log(i + ": " + element)
  }
}

function maxValue(array){
  var max = null;
  for(var i = 0; i<array.length; i++){
   var num = array[i];
   if(num>max){
     max = num
   }
  }
  return max
}


function printRange(num1, num2){
  if(num1>num2){
    console.log("Bad Range")
  }
  for( var i = num1; i<=num2; i++){
    console.log(i)
  }
}
printRange(29, 24)
