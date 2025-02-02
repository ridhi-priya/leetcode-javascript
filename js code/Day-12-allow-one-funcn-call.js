// 2666. Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
//  * Difficulty: easy
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      result = fn(...args);
      called = true;
      return result;
    }
  };
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
