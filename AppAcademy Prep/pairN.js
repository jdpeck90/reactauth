/*************************************************************
Write a function pairN(ary, n) which takes the arguments:
  - ary, an array of numbers
  - n, a number

It returns an array containing all the pairs of indices of elements
in the array that sum to n.

Examples:
var ary1 = [5, -5, 2, -2];
pairN(ary1, 0); // => [[0, 1], [2, 3]]

var ary2 = [1, 5, 3, 2, 3]
pairN(ary2, 6); // => [[0, 1], [2, 4]
*************************************************************/


function pairN(ary, n) {
var pairs = [];
  for(var i =0; i<ary.length; i++){
    var ele1 = ary[i];

    for(var j=i+1; j<ary.length; j++){
      var ele2 = ary[j];

      if ((ele1+ele2) === n){
        pairs.push([i,j])
      }
    }
  }
  return pairs
}


var ary1 = [5, -5, 2, -2];
console.log(pairN(ary1, 0))

var ary2 = [1, 5, 3, 2, 3]
console.log(pairN(ary2, 6))
