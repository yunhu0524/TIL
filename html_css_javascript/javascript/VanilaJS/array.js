const data = [1,2,3,'Dave',null];
console.log(data);
console.log(data.length);

const data1 = new Array();
data[0] = 1;
data[1] = 2;
console.log(data[0]);
console.log(data[1]);

console.log(data);
// data[1] 부터 2개를 제외하고  
data.splice(1, 2); // (1,Dave,null)
console.log(data);

const data2 =[
  {name: 'Dave Lee', age: 30},
  {name: 'Alie', age: 40},
]

const data3 = [
  [1,2,3],
  [4,5,6]
]

console.log(data[0]);
console.log(data2[0]);
console.log(data3[0][1]);

// push pop shift
data.push(5);
console.log(data);

console.log(data.pop());

// 배열 앞에 값을 삭제 하고 땡겨준다.
data.shift();
console.log(data);

// concat
const data4 = [1,2];
const data5 = [3,4];

const data6 = data4.concat(data5)

console.log(data6);

//join = 배열값을 문자열로 만들어 준다.
const data7 = data6.join('*');
console.log(data7);

//reverse 배열을 역순으로 바꿔준다.
data6.reverse();
console.log(data6);

//slice
let dataSlice=data6.slice(1,3);
console.log(dataSlice);

//forEach
data6.forEach(item=>{
  console.log(item);
})

//map 배열값에 정해진 수식을 넣고 싶은때
console.log('Map');
const dataMap = data6.map(item => item*2); 
console.log(dataMap);

//indexOf : 배열에 index 값을 반환해준다.
console.log(data6.indexOf(3));

// findIndex : 객체 안에 있는 값을 얻을때 (번호를 준다.)
const myArray =[
  {
    id: 1,
    mane:'Dave Lee'
  },
  {
    id:2,
    name:'Alive'
  }
];

console.log(myArray.indexOf('Alive')); // 찾을 수 없다.
console.log(myArray.findIndex(item => item.name === 'Alive')); // 찾을 수 없다.
// find : 안에 있는 값을 반환한다.
console.log(myArray.find(item=>item.name==='Alive'));

// filter : 배열에서 특정 조건에 맞는 아이템만 추출할 때 사용하는 기능

let filterData = [1,2,3,4,5,6,7];
let even = filterData.filter(item => item%2 ===0);
console.log(even);