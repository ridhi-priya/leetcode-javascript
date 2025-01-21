// 9. Palindrome Number
//  * https://leetcode.com/problems/palindrome-number/description/
//  * Difficulty: easy

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(101);
console.log(res);
