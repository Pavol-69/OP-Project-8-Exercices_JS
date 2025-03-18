const display = document.getElementById("display");

function appendToDisplay(val) {
  display.value = display.value + val;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  const operatorList = ["+", "-", "*", "/"];
  const result = calculate(display.value, operatorList, 0);
  display.value = isNaN(result) ? "Division by zero is not allowed" : result;
}

function calculate(calculList, operatorList, operatorIndex) {
  const split = calculList.split(operatorList[operatorIndex]);
  let numList = [];
  for (let i = 0; i < split.length; i++) {
    if (isNaN(Number(split[i]))) {
      numList.push(calculate(split[i], operatorList, operatorIndex + 1));
    } else {
      numList.push(Number(split[i]));
    }
  }
  let result = numList[0];
  for (let i = 1; i < numList.length; i++) {
    result = operation(result, numList[i], operatorList[operatorIndex]);
  }
  return result;
}

function operation(a, b, operator) {
  switch (operator) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    case "*":
      return Number(a) * Number(b);
    case "/":
      return Number(b) > 0
        ? Number(a) / Number(b)
        : "Division by zero is not allowed";
    default:
      return "Invalid operator";
  }
}
