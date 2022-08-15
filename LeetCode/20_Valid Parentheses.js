var isValid = function (s) {

  // 비교
  let map = { "(": ")", "[": "]", "{": "}" };
  // 스택 
  let stack = [];

  for (let ch of s) {
    // 존재 하면 push
    if (map[ch]) {
      stack.push(map[ch]);
      // 스택에 있는 값과 같으면 pop
    } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
      stack.pop();
      // 나머지 false
    } else return false;
  }
  return stack.length == 0;
};

console.log(isValid('{()}'));