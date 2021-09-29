function plus(a,b){
  console.log(a+b);
}
plus(8,60);

const player = {
  name:"nico",
  sayHello: function(a){
    console.log("hello "+ a +" nice");
  }
};
console.log(player.name);
player.sayHello("haha");

const toBuy=["potato","tomato","pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);