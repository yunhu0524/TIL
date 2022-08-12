/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // s 가 홀수 일때 false
  if (s.length & 1) return false;
  
  // 답
  const answer = true;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  // 열린 괄호
  const open = Object.keys(map);
  // 스택
  const stack = s.toString().split('');

  for (let el of s) {
    // 열린 괄호 push
    if (open.includes(el)) stack.push(el);
    // 닫힌 괄호만 있을때.
    if (stack.length === 0) return false;
    // 닫힌 괄호 pop
    if (map[stack[stack.length - 1]] === el) stack.pop();
  }
  // 마지막까지 없으면 false
  if (stack.length !== 0) return false;

  return answer;
};

console.log(isValid("([}}])"));
