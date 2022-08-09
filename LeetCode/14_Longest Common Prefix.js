// 1. 가장 작은 길이의 단어를 찾는다.
// 2. 찾은 단어로 비교한다.
// 3. 일치하지 않으면 루프를 벗어난다.

var longestCommonPrefix = function (str) {
  // str 에 첫번째 단어 길이
  const firstWordLength = str[0].length;

  // str 에서 제일 작은 길이에 단어
  let minLength = null;
  let sameWord = [];
  for (let i = 0; i < str.length - 1; i++) {
    minLength = Math.min(firstWordLength, str[i].length);
  }
  for (let i = 0; i < minLength; i++) {
    let current = str[0][i];
    console.log(current);
  }
  console.log(minLength);
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
