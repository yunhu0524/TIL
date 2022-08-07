const PalindromeNumber = function(x) {
  if (x >= 0) {
    const revers = x.toString().split("").reverse().join("");
    return x.toString() === revers.toString() ? true : false;
  } else {
    return false;
  }
};

console.log(PalindromeNumber(0));