const makeRed = () => (box.style.background = "red");
const makeYellow = () => (box.style.background = "yellow");

const box = document.querySelector(".box1");

box.addEventListener("mouseover", makeRed);
box.addEventListener("mouseout", makeYellow);

box.addEventListener("click", () => {
  box.removeEventListener("mouseover", makeRed);
  box.removeEventListener("mouseout", makeYellow);
});
