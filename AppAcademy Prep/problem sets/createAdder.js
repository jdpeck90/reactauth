function createAdder(num1) {
    var f = function(num2) {
        return num1 + num2
    }
    return f
}

var addTwo = createAdder(2)
var addThree = createAdder(3)
var addFour = createAdder(4)

        console.log(addTwo(1))
        console.log(addThree(1))
        console.log(addFour(1))
