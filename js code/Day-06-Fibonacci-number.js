// 509. Fibonacci Number
//  * https://leetcode.com/problems/fibonacci-number/description/
//  * Difficulty: easy

/**
 * @param {number} n
 * @return {number}
 */
// sol1 brute force approach
// var fib = function (n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   console.log(arr[n]);
//   return arr[n];
// };
// console.log(fib(6));

//sol2 using recursion
// const fibonacci = (n) => {
//   if (n <= 1) return n;
//   return fib(n - 2) + fib(n - 1);
// };
// console.log(fibonacci(6)); // 8

//sol3 using recursion
const fiboNo = (n, memo = {}) => {
  if (n <= 1) return n;
  if (n in memo) return memo[n];
  memo[n] = fiboNo(n - 1, memo) + fiboNo(n - 2, memo);
  return memo[n];
};

console.log(fiboNo(6)); // 8
