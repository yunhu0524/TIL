// class 안에 생성자함수 => constructor()
class classUser{
  constructor(){
    this.name='Dave';
    this.age='30';
  }
}
const classDave = new classUser();
console.log(typeof classDave, classDave.age, classDave.name);

// extends 상속 super
class Animal{
  constructor(name){
    this.name = name;
  }
  get_message(){
    return 'Hello'
  }
}
// class도 객체이기 때문에 prototype을 상속 받는다.
Animal.prototype.user = 'choi'

class User extends Animal{
  constructor(name,age){
    super(name); // 부모 클래스에 맞게 인자를 넣어 줘야 한다.
    this.age = age;
  }
  get_message(){
    return 'Hello World' // 부모 함수 안에 내용일 바꿀 수 있다.
  }
}
const dave = new User('Dave', 30);
console.log(dave.age, dave.name, dave.get_message(), dave.user);
//hasOwnProperty 내부에서 정의 되었는지 아닌지 boolen 값으로 알려준다.
console.log(dave.hasOwnProperty('name'));
console.log(dave.hasOwnProperty('user'));