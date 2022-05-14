let nums = [2, 11, 3, 6, 7, 15];
let target = 9;

const twoSum1 = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
  }
  return result
};
console.log(twoSum1(nums, target));

// 다른 사람 풀이.
const twoSum2 = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    // 9 - 2 = 7
    
    if (another in map) {
      // map 안에 anoter 값이 존재 한다면 (7 이 존재한다면)
      // map[anoter] = anoter 
      
      // console.log(map);  // { '2': 0, '3': 2, '11': 1 }
      // console.log(map[another]); // 2
      // console.log(map[11]); // 1

      return [map[another], i];
    } else {
      map[nums[i]] = i;
      // console.log(map);
    }
  }
};
console.log(twoSum2(nums, target));