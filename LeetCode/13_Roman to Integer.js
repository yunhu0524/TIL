var romanToInt = function (s) {
  const strArr = s.split("");
  const numArr = strArr.map((s) => {
    switch (s) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
    }
  });
  let sum = numArr[numArr.length - 1];

  for(let i = numArr.length-1; i>=0; i--){
    if(i-1 < 0) break;
    if (numArr[i] > numArr[i-1]){
      sum -= numArr[i-1];
    }else{
      sum += numArr[i-1];
    }
  }
  return sum;
};

console.log(romanToInt('III'));
