// 1. 가장 작은 길이의 단어를 찾는다.
// 2. 찾은 단어로 비교한다.
// 3. 일치하지 않으면 루프를 벗어난다.

var longestCommonPrefix = function (str) {
  // 같은 글자
  let sameWord = "";
  // str개수가 1일때. 
  if (str.length === 1) {
    return (sameWord = str[0]);
  }
  // str 에 첫번째 단어 길이
  const firstWordLength = str[0].length;
  // str 에서 제일 작은 길이 단어
  let minLength = 0;

  // 제일 작은 길이 단어 찾기
  for (let i = 0; i < str.length; i++) {
    minLength = Math.min(firstWordLength, str[i].length);
  }
  // minLength 로 sameWord 찾기
  for (let i = 0; i < minLength; i++) {
    let current = str[0][i];
    for (let j = 0; j < str.length; j++) {
      if (str[j][i] !== current) {
        return sameWord;
      }
    }
    sameWord += current;
  }
  return sameWord;
};

const strs = ["a"];
console.log(longestCommonPrefix(strs));
