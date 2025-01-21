// 509. Fibonacci Number
//  * https://leetcode.com/problems/fibonacci-number/description/
//  * Difficulty: easy

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr[n]);
  return arr[n];
};
fib(6);
