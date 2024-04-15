function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const buttons = document.querySelectorAll("button");
const displayed = document.querySelectorAll(".displayed");
const operators = document.querySelectorAll(".operator");
const operateButton = document.querySelector(".operate");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

let numberA = "";
let numberB;
let selectedOperator = "";

function updateDisplay(text) {
    result.textContent += text;
    console.log(result.textContent);
}

displayed.forEach((button) => {
    button.addEventListener("click", (e) => {
        updateDisplay(e.target.textContent);
    });
});

clear.addEventListener("click", () => {
    result.textContent = "";
    numberA = "";
    numberB = "";
    selectedOperator = "";
});

operators.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (selectedOperator === "") {
            numberA = result.textContent;
            console.log(`number A set to ${numberA}`);
            selectedOperator = e.target.textContent;
            console.log(`selected operator: ${selectedOperator}`);
            result.textContent += ` ${selectedOperator} `;
            console.log(result.textContent.split(" "));
        } else if (result.textContent.split(" ").length == 3) {
            // like clicking the = button, this sets B and runs operate function. Also sets the result as the new A,
            console.log(
                `split length: ${result.textContent.split(" ").length}`
            );
            console.log(`selected operator: ${selectedOperator}`);
            numberB = result.textContent.split(" ")[2];
            console.log(`number B set to ${numberB}`);
            const resultValue = operate(
                selectedOperator,
                parseFloat(numberA),
                parseFloat(numberB)
            );
            console.log(result.textContent.split(" "));
            result.textContent = `${resultValue}`;
            numberA = result.textContent;
            selectedOperator = e.target.textContent;
            console.log(`number A set to ${numberA}`);

            result.textContent += ` ${selectedOperator} `;
        } else {
            numberA = result.textContent.split("")[0];
            result.textContent = `${numberA} ${selectedOperator} `;
            console.log("hehe");
        }
    });
});

operateButton.addEventListener("click", () => {
    console.log(result.textContent.split(" "));
    numberB = result.textContent.split(" ")[2];
    console.log(`number B set to ${numberB}`);

    const resultValue = operate(
        selectedOperator,
        parseFloat(numberA),
        parseFloat(numberB)
    );

    if (resultValue) {
        result.textContent = `${resultValue}`;
    }

    numberA = result.textContent;
    numberB = "";
    selectedOperator = "";
    console.log(`number A set to ${numberA}`);
});

console.log(buttons);
