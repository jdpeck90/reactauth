var myObj = {
  name : "Markov",
  sayHi : function() {
    console.log(this.name + " says Hi.");
  }
};

var myFunc = myObj.sayHi; // not calling sayHi

myObj.myFunc(); // what does this output?
