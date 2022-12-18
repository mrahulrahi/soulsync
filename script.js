let display = document.getElementById("output-id");
let errorDisplay = document.getElementById("error-window-id");
let buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "=" &&
      button.textContent != "AC" &&
      button.textContent != "x" &&
      button.textContent != "÷" &&
      button.textContent != "√" &&
      button.textContent != "%" &&
      button.textContent != "<=" &&
      button.textContent != "^" &&
      button.textContent != "!" &&
      button.textContent != "π" &&
      button.textContent != "e"
    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "AC") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "^") {
      exponent();
    } else if (button.textContent === "!") {
      factorial();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});

function syntaxError() {
  if (
    eval(errorDisplay.value) == SyntaxError ||
    eval(errorDisplay.value) == ReferenceError ||
    eval(errorDisplay.value) == TypeError
  ) {
    errorDisplay.value == "Syntax Error";
  }
}

function equals() {
  if (display.value.indexOf("^") > -1) {
    var base = display.value.slice(0, display.value.indexOf("^"));
    var exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = display.value * Math.PI;
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function exponent() {
  display.value += "^";
}
