for (let i=0; i<5; i++){
  console.log(i);
}
const data =['Dave', 'Alex','David'];
for(let i=0; i<data.length; i++){
  console.log(data[i]);
}
// for...of
for (let item of data){
  console.log(item);
}
// 
const data1 = {
  name: 'Dave',
  age: 20,
  brand:'fun-coding',
  get_message: function(){
    return 'Hello You can do it!!'
  }
}

console.log(Object.entries(data));
console.log(Object.keys(data));
console.log(Object.values(data));
// for in
for(let property in data){
  console.log(property, data[property]);
}

// while
let i = 0;
while (i<5){
  console.log(i);
  i++
}

