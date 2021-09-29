function plus(a,b){
  console.log(a+b);
}
plus(8,60);


// function
const player = {
  name:"nico",
  sayHello: function(a){
    console.log("hello "+ a +" nice");
  }
};
console.log(player.name);
player.sayHello("haha");


// 배열
const toBuy=["potato","tomato","pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

// return
const age = 150;
function calculateKrAge(ageOfForeigner){
 return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);