let screen = document.getElementById("output-id");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "√") {
      screen.value = eval(Math.sqrt(screenValue));
    } else if (buttonText == "^") {
      screen.value = eval(Math.power(screenValue));
    } else if (buttonText == "π") {
      screen.value = eval(Math.PI(screenValue));
    } else if (buttonText == "!") {
      screen.value = eval(Math.exp(screenValue));
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
