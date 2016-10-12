
/*************************************************************
Write a function `divisibleByThreePairSum(array)` that takes
an array of numbers. It should return an array of all the
pairs of indices whose sum is a multiple of three.

Examples:
> divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
[[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

> divisibleByThreePairSum([8, 3, 5, 9, 2]);
[[1, 3]]
*************************************************************/

function divisibleByThreePairSum(array){
  var selection = [];

  for (var i=0; i<array.length; i++){
    var elei = array[i];

    for(var j=i+1; j<array.length; j++){
      var elej = array[j];

        if((elei+elej) %3 ===0){
          selection.push([i,j])
        }
    }
  }
  return selection
}


/*************************************************************
Write a function `peakFinder(array)` that takes in an array of
numbers. It should return an array containing the indices of
all the peaks. A peak is an element that is greater than both
of its neighbors. If it is the first or last element, it is
a peak if it is greater than its one neighbor. Assume the
array has a length of at least 2. Writing this function does
not require a nested loop.

Examples:
> peakFinder([1,2,3,2,1])
[2]

> peakFinder([2,1,2,3,4,5])
[0, 5]

> peakFinder([4,6,9,4,2,-7,2,-4,5])
[2, 6, 8]
*************************************************************/

function peakFinder(array){
  var peaks = [];

  for(var i =0; i<array.length; i++){
    var element = array[i];
    var after = array[i+1]
    var before = array[i-1]
    if(i===0 && element>after){
      peaks.push(i);
    }
    if(i===array.length-1 && element> before){
      peaks.push(i);
    }
    if(element>before && element>after){
  peaks.push(i)

  }}
  return peaks;
}
