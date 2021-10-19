// 전역 scope

let data =1; // 전역에서 사용가능 

{
  let data = 1; // {}(블록) 안에서만 유효
}

function getData(){
  let item = 2; // 함수 안에서만 유효
}

{
  let item1 = 1;
  {
    let item2 = 3;
    console.log(item1); // 유효하다
  }
  console.log(item2); // 오류!! 
}