// console.log('안녕하세요'); // 1

// setTimeout(()=>{ // 3
//   console.log('Dave Lee 입니다.');
// },1000);

// console.log('잔재미코딩입니다.'); // 2

console.log('--------------');

// console.log('안녕하세요'); // 1

// function desc(callback) { // 2
//   setTimeout(()=>{ 
//   console.log('Dave Lee 입니다.');
//   callback(); 
// },2000);
// }
// function desc2() {
//   console.log('잘 부탁드립니다.'); // 3
// }

// desc(desc2); // desc 안에 desc2 를 넣어 callback 해준다.

// promise
const promise = new Promise(
  (resolve, reject)=>{
    setTimeout(()=>{
      let num = 10;
      if(num > 9){
        resolve(num);
        } else{
          reject("error")
        }
      },1000);
    })
  
promise.then((item)=>{
  console.log('success',item);
},(err)=>{
  console.log(err);
});

console.log('by Dave Lee');

const promise1 = new Promise((resolve, reject)=>{
  console.log("start");
  resolve(1);
});

promise
  .then((num)=>{
    console.log("success1");
  })
  .then(()=>{
    console.log("success2");
    throw new Error("error2");
  })
  .then(()=>{
    console.log("success3");
  })
  .catch((error)=>{
    console.log("error");
  });