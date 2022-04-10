var calPoints = function(ops) {
    let result = [];
    
    for(let i = 0; i<ops.length; i++){
      if (ops[i] === 'C') {
        result.pop();
      } else if (ops[i] === 'D') {
        result.push(2 * result[result.length - 1]);
      } else if (ops[i] === '+') {
        result.push(parseInt(result[result.length - 2]) + parseInt(result[result.length - 1]));
      } else {
        result.push(parseInt(ops[i]));
      }
    }    
  return result.reduce((acc, cur) => acc + cur);
};
