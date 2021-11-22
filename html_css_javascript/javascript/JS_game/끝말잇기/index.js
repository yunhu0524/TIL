const dic = [];
const dicTag = document.querySelector("#dic");

const wordTag = document.querySelector("#word");
let word = wordTag.textContent;

const inputTag = document.querySelector("#input");
let input = inputTag.value;

const errorTag = document.querySelector("#error");
let btn = document.querySelector("#btn");

function textAdd() {
  if (dic.includes(inputTag.value)) {
    errorTag.textContent = "중복입니다.";
  } else {
    if (word[word.length - 1] === inputTag.value[0]) {
      wordTag.textContent = inputTag.value;
      word = inputTag.value;
      console.log(dicTag.textContent);
      dic.push(inputTag.value);
      errorTag.textContent = "";
      inputTag.value = "";
      inputTag.focus();
    } else {
      errorTag.textContent = "땡";
      inputTag.value = "";
      inputTag.focus();
    }
  }
}

btn.addEventListener("click", textAdd);
