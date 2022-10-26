function createOutputScreen() {
  var outputScreen = document.createElement("div");

  outputScreen.id = "output-screen";

  return outputScreen;
}

function calculate() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var operator = document.getElementById("operator").value;
  var result;

  switch (operator) {
    case "+":
      result = parseInt(input1) + parseInt(input2);
      break;
    case "-":
      result = parseInt(input1) - parseInt(input2);
      break;
    case "*":
      result = parseInt(input1) * parseInt(input2);
      break;
    case "/":
      result = parseInt(input1) / parseInt(input2);
      break;
    default:
      return;
  }

  document.getElementById("result").innerHTML = result;
}
