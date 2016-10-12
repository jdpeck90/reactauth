function divisibleByNPairSum(array, n){
  var pairSum = [];
  array.forEach(function(n1, i){
    array.forEach(function(n2, j){
      if((n1>n2) && (n1+n2) % n===0){
        pairSum.push([i,j])
      }
})
  })
  return pairSum
  }
