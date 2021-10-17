// 삼항 연산자 
const data = [1,2];

if(data.length === 0){
  console.log('빈 배열입니다.');
}else{
  console.log('배열이 차있습니다.');
}
data.length === 0 ? console.log('빈 배열'):console.log('배열이 차있습니다.');


// 디폴트 값을 설정 할 수있다.
function print(name) {
  console.log(name);
}
print() // undefined

function printData(name='Dave') {
  console.log(name);
}
printData() // Dave

// 구조 분해 할당 문법 (객체)
const data2 = {
  name: 'Dave',
  age: 30, 
  hobby: 'coding'
};
// data2에서 name 과 age 를 가져오고 싶다.
 let {name, age} = data2;
 console.log(name, age);

 // 이름 변경, 추가, 기본값 설정이 가능하다.
 let {name:myName, age:myAge=25, spacial='pyton'} = data2;
 console.log(myName, myAge, spacial);

 //배열 분해 할당 (배열)
let arrayData = [1,2,3,4];

let [i1, i2, i3, i4] = arrayData;
console.log(i1, i2, i3, i4);
console.log( i2, i3,);

// 스프레드 ...  , 기본값도 설정이 가능하다.
let [i5='Dave', ...i6] = arrayData;
console.log(i6);

