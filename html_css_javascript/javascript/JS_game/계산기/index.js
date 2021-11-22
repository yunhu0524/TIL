const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");

const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");

const calculateButton = document.querySelector("#calculate");
const resultInput = document.querySelector("#result");

let temp;
let oprator;

plusButton.addEventListener("click", () => {
  if (numberInput.value) {
    temp = numberInput.value;
    oprator = "+";
  }
});
clearButton.addEventListener("click", () => {
  numberInput.value = "";
  temp = null;
  oprator = null;
});
resultInput.addEventListener("click", () => {
  if (oprator) {
  } else {
  }
});
