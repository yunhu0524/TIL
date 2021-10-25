document.querySelector("#click").addEventListener("click", () => {
  let a = document.querySelector("#first").value;
  let b = document.querySelector("#second").value;
  let r = document.querySelector("#result");
  if (a) {
    if (b) {
      let c = a * b;
      r.textContent = c;
    } else {
      r.textContent = "두 번째 값 입력해 주세요";
    }
  } else {
    r.textContent = "첫 번째 값 입력해 주세요";
  }
});
