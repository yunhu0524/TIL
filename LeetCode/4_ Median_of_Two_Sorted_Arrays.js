/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 */

let nums1 = [1, 3];
let nums2 = [3, 4, 5];
const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);

var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2); // 배열
  nums.sort((a, b) => a - b); // 오름차순 정렬

  const mid = parseInt(nums.length / 2); // 중앙 값

  // console.log(parseInt(nums.length));
  // console.log(mid);
  // console.log(sum(nums[mid - 1], nums[mid] / 2).toFixed(5));
  // console.log(nums[mid].toFixed(5));

  return nums.length % 2 === 0 // 홀수 짝수 구분
    ? (sum(nums[mid - 1], nums[mid]) / 2).toFixed(5)
    : nums[mid].toFixed(5);
};



console.log(findMedianSortedArrays(nums1, nums2));