/**
 * @param {string} s
 * @return {number}
 */

let s = "abcccdef";

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let temp = "";
  let result = "";

  // console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    let index = temp.indexOf(s[i]);
    // console.log(`temp ::: ${temp}`);
    // console.log(`s[i]::: ${s[i]}`);
    // console.log(index);
    if (index !== -1) {
      start = start + index + 1;
      console.log(`start::: ${start}`);
    }

    temp = s.substring(start, i + 1);

    if (result.length < temp.length) {
      // console.log(`result::: ${result}`);
      // console.log(`temp::: ${temp}`);
      result = temp;
    }
  }
  return result.length;
};

console.log(lengthOfLongestSubstring(s));
