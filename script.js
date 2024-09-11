const display = document.getElementById("display");
function appendToDisplay(input) {
  if (display.value === "Syntax error in ") clearDisplay();

  display.value += input;
}
function backspace() {
  const value = display.value;
  if (value.length > 0) display.value = value.substr(0, value.length - 1);
}
function clearDisplay() {
  display.value = "";
}
function calculateResult() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Syntax error in " + expression;
  }
}
