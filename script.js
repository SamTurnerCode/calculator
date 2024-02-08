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
    if (number1 == 0 || number2 == 0 && operator == "/") {
        alert("Don't break the mainframe dummy")
        return 0
    }
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
    resultDisplay.innerHTML = result.toFixed(3);
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
    console.log(tempValue)
    console.log(numbers)

  });
});

const operatorButtons = document.querySelectorAll('div.operatorRow > button');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    operators.push(button.textContent)
    // This is pushing even if tempValue empty
    
    if(tempValue.length != 0){
        numbers.push(parseInt(tempValue))
        tempValue = [];
    }
    
    if(numbers.length > 1) {
        console.log("triggered")
        performOperation()
    }
  });
});

const equalButton = document.querySelector("#equals")
equalButton.addEventListener('click', () => {
    if(tempValue.length != 0){
        numbers.push(parseInt(tempValue))
        tempValue = [];
    }

    performOperation()
    console.log(numbers)
    console.log(tempValue)
});

const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', () => {
    clear();
    resultDisplay.innerHTML = 0;
})



