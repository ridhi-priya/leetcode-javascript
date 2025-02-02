/**
 * @param {number[]} nums
 * @return {void}
 */

var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  console.log(this.nums.reduce((sum, num) => sum + num, 0));
  return this.nums.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  console.log(`[${this.nums.join(",")}]`);
  return `[${this.nums.join(",")}]`;
};
