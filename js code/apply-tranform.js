// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

let arr = [1, 2, 3];
let fn = function plusI(n, i) {
  return n + i;
};

var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  //   console.log(arr);
  return arr;
};
