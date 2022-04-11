var ops = ["5", "2", "C", "D", "+"];

var calPoints = function (ops) {
  let result = [];

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "C") {
      // console.log(result); // [5,2]
      result.pop(); // [5]
    } else if (ops[i] === "D") {
      // console.log(result[0]); // 5
      // console.log(result[result.length-1]); // 1 - 1 = 0, result[0] = 5
      result.push(2 * result[result.length - 1]); // 2 * 5 = 10
    } else if (ops[i] === "+") {
      // console.log(result); // [5,10]
      result.push(
        parseInt(result[result.length - 2]) +
        parseInt(result[result.length - 1])
      );
    } else {
      result.push(parseInt(ops[i]));
      
    }
  }
  // console.log(result); // [5, 10, 15]
  return result.reduce((acc, cur) => acc + cur);
  // reduce(accumulator, currentValue, currentIndex, array)
  // accumulator = initialValue 가 없으면 0 부터 시작
  // currentValue = 배열에 첫번째 값 부터 시작
};
console.log(calPoints(ops));

// 두번째 풀이
var calPoints2 = function (ops) {
  let result = [];

  ops.forEach((value) => {
    switch (value) {
      case "D":
        result.push(2 * result[result.length - 1]);
        break;
      case "C":
        result.pop();
        break;
      case "+":
        result.push(result[result.length - 2] + result[result.length - 1]);
        break;
      
      default:
        result.push(parseInt(value));
        break;
    }
  });
  return result.reduce((acc, cur) => acc + cur);
};

console.log(calPoints2(ops));
