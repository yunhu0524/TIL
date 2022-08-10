/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const sm = '(';
    const map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    const value = map[sm];
    return value
};

console.log(isValid());