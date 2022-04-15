/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
 */

let nums1 = [1, 3];
let nums2 = [3, 4];
const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(sum(nums1));

var findMedianSortedArrays = function (nums1, nums2) {
  const nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);

  const mid = parseInt(nums.length / 2);

  return nums.length % 2 === 0
    ? (sum(nums[mid - 1], nums[mid]) / 2).toFixed(5)
    : nums[mid].toFixed(5);
};



console.log(findMedianSortedArrays(nums1, nums2));