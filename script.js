/// VARIABLES
let tempValue = [];
let numbers = [];
let operators = [];
let display = 0;

// FUNCTIONS
const add = function(x, ...y) {
    y.forEach((y) => x += y)
    return x
};

const subtract = function(x, ...y) {
    y.forEach((y) => x -= y)
return x
};

const multiply = function (x,y){
    return x * y;
}

const divide = function (x,y){
    return x / y;
}

const operate = function(number1,number2,operator) {
    if (operator == '+'){
        return add(number1,number2)
    } else if (operator == '-') {
        return subtract(number1, number2)
    } else if (operator == '/') {
        return divide(number1,number2)
    } else if (operator == '*') {
        return multiply(number1,number2)
    }
}

const performOperation = function() {
    let result = operate(numbers.shift(), numbers.shift(),operators.shift());
    numbers.push(result)
    resultDisplay.innerHTML = result;
    console.log(numbers)
}

const clear = function(){
    tempValue = [];
    numbers = [];
    operators = [];

}

// EVENT LISTENERS
const resultDisplay = document.querySelector('#display')
const numberButtons = document.querySelectorAll('div.numberRow > button');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tempValue += button.id
  });
});

const operatorButtons = document.querySelectorAll('div.operatorRow > button');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operators.push(button.textContent)
    // This is pushing even if tempValue empty
    numbers.push(parseInt(tempValue))
    tempValue = [];
    console.log(numbers)
    console.log(numbers.length)
    if(numbers.length > 1) {
        console.log("triggered")
        performOperation()
    }
  });
});

const equalButton = document.querySelector("#equals")
equalButton.addEventListener('click', () => {
    numbers.push(parseInt(tempValue))
    // This is pushing even if tempValue empty
    tempValue = []
    performOperation()
});

const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', () => {
    clear();
    resultDisplay.innerHTML = 0;
})



