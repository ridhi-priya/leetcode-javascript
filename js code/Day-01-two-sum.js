// 1. Two Sum
//  * https://leetcode.com/problems/two-sum/
//  * Difficulty: Easy

let nums = [2, 7, 11, 15];
target = 13;
// sol1
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//     return [];
//   }
// sol2
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    }
    obj[n] = i;
  }
  return [];

  // sol3
  // var twoSum = function (nums, target) {
  //   const map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     const finddiff = target - nums[i];
  //     if (map.has(finddiff)) {
  //       return [map.get(finddiff), i];
  //     }
  //     map.set(nums[i], i);
  //   }
  //   return [];
};
document.write(twoSum(nums, target));
