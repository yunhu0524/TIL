console.log('hello');

// let
let test;
test = 1;
console.log(test);
test = 2;
console.log(test);

//const
const testValue = true;
console.log(typeof testValue);

//symbol
let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol2, testSymbol2);

console.log(testSymbol1 == testSymbol2);
console.log(testSymbol1 === testSymbol2);

// number
let num = 1;
console.log(parseInt(1.2)); // 소수를 없애 준다.
console.log(parseFloat(1.2)); // 소수 그대로 = Number 을 사용해도 된다

//String
let str = 'Hello';
console.log(str + ' World');

//if 
let age = 10;
if(age > 19){
  console.log('성인 입니다.');
}else{
  console.log('청소년 입니다.');
}

// function
function Fun(name){
   return  'Hi' + name;
}
console.log(Fun(' Dave'));

//arrow function =>
let func = (name) => {
  console.log('Hi!' + name);
}
func(' Dave');

// let f1 = function(aa){
//   return "Hello World" + aa;
// }
// 아래와 같다
let f1 = (aa) => "Hello World" + aa;
console.log(f1(' fuck'));

let func1 = (item1, item2) => 
  item1 + item2;
console.log(func1(2,3));

// property => key value 로 이루어진 값 = attribute

//객체 
const user = {
  age: 20,
  name: 'Dave',
  get_data: function(){
    return 1+2;
  }
}; // 객체 마지막에는 ; 가 들어간다.
console.log(typeof user, user);
console.log(user.age);
user.age = 25;
console.log(user);
console.log(user.get_data());

const emptyObject={};
emptyObject.name = 'Dave'
emptyObject.age=10;
emptyObject.get_data=function(){
  return 1+5;
}
console.log(emptyObject);
console.log(emptyObject.get_data());

//propertype 
function User(age, name){
  this.age = age;
  this.name = name;
}
User.prototype.message = function(){
  return 'Hello';
}
User.prototype.hobby = 'coding';
const dave = new User(10, 'Dave');
console.log(dave.age, dave.name, dave.hobby);
