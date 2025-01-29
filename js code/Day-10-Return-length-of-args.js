// 2703. Return Length of Arguments Passed
// https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
//  * Difficulty: easy

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  console.log(args.length);
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
