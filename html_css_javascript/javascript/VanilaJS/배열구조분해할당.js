// 스위칭이 편하다
let a = 1;
let b = 2;

[a,b] = [b,a]
console.log(a,b); // a:2, b:1

//
function getData() {
  return [1,2,3];
}

let [d,f,g] = getData();
console.log(d,f,g);

//split() 문자열 분리해서 배열안에 넣어 준다.
let data3 = 'Dave Lee, fun-coding, coding'
console.log(data3.split(','));

// 각각에 값에 넣어 줄수 있다.
let [name, brand, hobby] = data3.split(',')
console.log(name, brand, hobby);

//... : Rest 파라미터 
function restData(...rest){
  let [i1,i2,i3,i4,i5] = rest;
  console.log(rest);
  console.log(i1);
}
restData(1,2,3,4,5);

// Spread 파라미터 iterble(반복가능한 : 문자열, 배열) 한 변수 앞에 붙여준다.
console.log(getData()); //[] 
console.log(...getData()); // [] 없이 data[0], data[1]...

const myArray1 = [1,2,3];
const myArray2 = [...myArray1, 4,5,6];
console.log(myArray2);