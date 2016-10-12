function isPrime(num){
  if(num<2){
    return true;
  }
  for( var i=2; i<num; i++){
    if(num % i ===0){
      return false
    }
  }
  return true
}



function firstNPrime(n){
  var array = [];
  var num = 2;
  while(array.length<n){
   if(isPrime(num)){
     array.push(num)
   }
   num +=1;
  }
  return array
}

function sumOfNPrimes(n){
  var sum = 0
  var primes = firstNPrime(n);

for(var i = 0; i<n; i++){
   var primeNum = primes[i];
   sum += primeNum

}
return sum;
}
