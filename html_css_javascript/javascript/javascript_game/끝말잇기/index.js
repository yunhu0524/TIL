let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const word = document.querySelector("#word").textContent;
  const input = document.querySelector("#input").value;
  const lastIndex = word.length - 1;
  const w = word[lastIndex];
  const i = input[0];
  if (w === i) {
    document.querySelector("#word").textContent = input;
    document.querySelector("#error").textContent = "";
    document.querySelector("#input").value = "";
    document.querySelector("#input").focus();
  } else {
    document.querySelector("#error").textContent = "땡";
    document.querySelector("#input").value = "";
    document.querySelector("#input").focus();
  }
});
