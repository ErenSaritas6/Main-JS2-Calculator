let displayResult = "0";
let buttonArray = document.querySelectorAll("button");
let operator1 = null;
let operator2 = null;
let num1 = null;
let num2 = null;
let result = null;

function operate(num1, num2, operator) {

    if(operator === "+") {
        return (num1 + num2);
    } 

    else if(operator === "-") {
        return (num1 - num2);
    }

    else if(operator === "*") {
        return num1 * num2;
    }

    else if(operator === "/") {
        if(num2 === 0) {
            return "nope";
        } 

        else {
        return (num1/num2);
        }
    }
}

function updateDisplay() {
    const display = document.querySelector(".result");
    display.innerHTML = displayResult;

    if(displayResult.length > 16) {
        display.innerHTML = displayResult.substring(0, 16);
    }
}
updateDisplay();

function buttonClick() {
    for(let i = 0; i < buttonArray.length; i++){
        buttonArray[i].addEventListener("click", function() {
            if(buttonArray[i].classList.contains("number")) {
                numberInput(buttonArray[i].value);
                updateDisplay();
            }

            else if(buttonArray[i].classList.contains("operator")) {
                operatorInput(buttonArray[i].value);
                updateDisplay();
            }

            else if(buttonArray[i].classList.contains("dot")) {
                dotInput(buttonArray[i].value);
                updateDisplay();
            }

            else if(buttonArray[i].classList.contains("equal")) {
                equalInput(buttonArray[i].value);
                updateDisplay();
            }

            else if(buttonArray[i].classList.contains("clear")) {
                clearInput();
                updateDisplay();
            }

            else if(buttonArray[i].classList.contains("symbol")) {
                symbolInput(displayResult);
                updateDisplay();
            }
        })
    }
}
buttonClick();

function numberInput(num) {
    if(operator1 === null) {
        if(displayResult == "0") {
            displayResult = num;
        }

        else if(displayResult === num1) {
            displayResult = num;
        }

        else {
            displayResult += num;
        }
    }

    else {
        if(displayResult === num1) {
            displayResult = num;
        } 

        else {
            displayResult += num;
        }
    }
}

function operatorInput(operator) {

    if(operator1 != null && operator2 === null) {
        operator2 = operator;
        num2 = displayResult;
        result = operate(Number(num1), Number(num2), operator1);
        displayResult = result.toString();
        num1 = displayResult;
        result = null;
    }

    else if(operator1 != null && operator2 != null) {
        num2 = displayResult;
        result = operate(Number(num1), Number(num2), operator2);
        operator2 = operator;
        displayResult = result.toString();
        num1 = displayResult;
        result = null;
    } 

    else { 
        operator1 = operator;
        num1 = displayResult;
    }
}

function equalInput() {

    if(operator1 === null) {
        displayResult = displayResult;
    } 
    
    else if(operator2 != null) {
        num2 = displayResult;
        result = operate(Number(num1), Number(num2), operator2);

        if(result === "nope") {
            displayResult = "nope";
        } 
        
        else {
            displayResult = result.toString();
            num1 = displayResult;
            num2 = null;
            operator1 = null;
            operator2 = null;
            result = null;
        }
    } 
    
    else {
        num2 = displayResult;
        result = operate(Number(num1), Number(num2), operator1);

        if(result === "nope") {
            displayResult = "nope";
        } 
        
        else {
            displayResult = result.toString();
            num1 = displayResult;
            num2 = null;
            operator1 = null;
            operator2 = null;
            result = null;
        }
    }
}

function dotInput(dot) {

    if(displayResult === num1 || displayResult === num2) {
        displayResult = "0";
        displayResult += dot;
    } 
    
    else if(!displayResult.includes(dot)) {
        displayResult += dot;
    } 
}

function symbolInput(num) {
    displayResult = (num * -1).toString();
}

function clearInput() {
    displayResult = "0";
    num1 = null;
    num2 = null;
    operator1 = null;
    operator2 = null;
    result = null;
}

document.addEventListener("keydown", (event) => {
    let pressedKey = event.key;

    if(pressedKey == "1") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "2") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "3") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "4") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "5") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "6") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "7") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "8") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "9") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "0") {
        numberInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "+") {
        operatorInput(pressedKey);
        updateDisplay(); 
    }
    else if(pressedKey == "-") {
        operatorInput(pressedKey);
        updateDisplay(); 
    }
    else if(pressedKey == "*") {
        operatorInput(pressedKey);
        updateDisplay();  
    }
    else if(pressedKey == "/") {
        operatorInput(pressedKey);
        updateDisplay();  
    }
    else if(pressedKey == ".") {
        dotInput(pressedKey);
        updateDisplay();
    }
    else if(pressedKey == "c") {
        clearInput();
        updateDisplay();
    }
});
