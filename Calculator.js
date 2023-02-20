// get the calculator elements
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = calculator.querySelector(".calculator__display");

// function to perform calculation
const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};

// function to update display
const updateDisplay = (e) => {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  if (!action) {
    if (displayedNum === "0") {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }

  if (action === "decimal") {
    if (!displayedNum.includes(".")) {
      display.textContent = displayedNum + ".";
    }
  }

  if (
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide"
  ) {
    calculator.dataset.firstNum = displayedNum;
    calculator.dataset.operator = action;
  }

  if (action === "calculate") {
    const firstNum = calculator.dataset.firstNum;
    const operator = calculator.dataset.operator;
    const secondNum = displayedNum;

    display.textContent = calculate(firstNum, operator, secondNum);
  }

  if (action === "clear") {
    display.textContent = "0";
    delete calculator.dataset.firstNum;
    delete calculator.dataset.operator;
  }
};

// add event listener to keys
keys.addEventListener("click", updateDisplay);
