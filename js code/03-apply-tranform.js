// 3.* Apply transform over each element in array
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Difficulty: Easy

let arr = [1, 2, 3];
let fn = function plusI(n, i) {
  return n * i;
};

var map = function (arr, fn) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    a[i] = fn(arr[i], i);
  }

  return a;
};
arr = map(arr, fn);
document.write(arr);
