const p = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
const point = document.querySelector(".point");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal");
const ac = document.querySelector(".clear");
const percent = document.querySelector(".percent");
const sign = document.querySelector(".sign");

let holder1 = 0;
let holder2 = 0;
let result = 0;
let chosenOperator = "";

function add(x, y) {
  return Math.round((x + y) * 100) / 100;
}

function subtract(x, y) {
  return Math.round((x - y) * 100) / 100;
}

function multiply(x, y) {
  return Math.round(x * y * 100) / 100;
}

function divide(x, y) {
  return Math.round((x / y) * 100) / 100;
}

function operate(operator, int1, int2) {
  if (operator === "+") {
    return add(int1, int2);
  } else if (operator === "-") {
    return subtract(int1, int2);
  } else if (operator === "×") {
    return multiply(int1, int2);
  } else if (operator === "÷") {
    return divide(int1, int2);
  }
}

function clear() {
  holder1 = 0;
  holder2 = 0;
  chosenOperator = "";
}

function acClear() {
  ac.addEventListener("click", () => {
    clear();
    p.textContent = "0";
    result = 0;
  });
}

function percentage() {
  percent.addEventListener("click", () => {
    if (Number(p.textContent)) {
      result = divide(Number(p.textContent), 100);
      p.textContent = limitLength(result);
    }
  });
}

function convertSign() {
  sign.addEventListener("click", () => {
    if (Number(p.textContent)) {
      result = multiply(Number(p.textContent), -1);
      p.textContent = limitLength(result);
    }
  });
}

function numberInput() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (
        result !== 0 ||
        p.textContent === "0" ||
        p.textContent === "+" ||
        p.textContent === "-" ||
        p.textContent === "×" ||
        p.textContent === "÷"
      ) {
        p.textContent = number.value;
        result = 0;
      } else if (p.textContent.length < 9) {
        p.textContent += number.value;
      }
    });
  });
}

function pointInput() {
  point.addEventListener("click", () => {
    if (
      p.textContent.indexOf(".") === -1 &&
      p.textContent.length < 9 &&
      (Number(p.textContent) || p.textContent === "0")
    ) {
      p.textContent += ".";
    }
  });
}

function operatorInput() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      if (
        !holder1 &&
        p.textContent !== "+" &&
        p.textContent !== "-" &&
        p.textContent !== "×" &&
        p.textContent !== "÷"
      ) {
        holder1 = Number(p.textContent);
        p.textContent = operator.value;
        chosenOperator = p.textContent;
      } else if (
        holder1 &&
        p.textContent !== "+" &&
        p.textContent !== "-" &&
        p.textContent !== "×" &&
        p.textContent !== "÷"
      ) {
        holder2 = Number(p.textContent);
        result = operate(chosenOperator, holder1, holder2);
        holder1 = result;
        p.textContent = operator.value;
        chosenOperator = p.textContent;
      }
    });
  });
}

function limitLength(int) {
  if (int.toString().length > 9) {
    return int.toExponential(2);
  } else {
    return int;
  }
}

function equal() {
  equals.addEventListener("click", () => {
    if (
      p.textContent === "+" ||
      p.textContent === "-" ||
      p.textContent === "×" ||
      p.textContent === "÷"
    ) {
      p.textContent = holder1;
    } else if (chosenOperator && (!result || result === holder1)) {
      holder2 = Number(p.textContent);
      result = operate(chosenOperator, holder1, holder2);
      p.textContent = limitLength(result);
    } else if (result) {
      p.textContent = limitLength(result);
    }
    clear();
  });
}

percentage();
convertSign();
numberInput();
pointInput();
operatorInput();
acClear();
equal();
