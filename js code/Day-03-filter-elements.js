//  03. Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Difficulty: Easy

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */

let arr = [0, 10, 20, 30];
let fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) a.push(arr[i]);
  }
  return a;
};
arr = filter(arr, fn);
document.write(arr);
