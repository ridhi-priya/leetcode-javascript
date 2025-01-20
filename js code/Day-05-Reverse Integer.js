// 7. Reverse Integer
//  * https://leetcode.com/problems/reverse-integer/description/
//  * Difficulty: medium
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let xstr = Math.abs(x).toString();
  let rev = xstr.split("").reverse().join("");
  if (x < 0) {
    var res = -Number(rev);
  } else {
    var res = Number(rev);
  }
  if (res < -2147483648 || res > 2147483647) {
    //for -231 <= x <= 231 - 1
    console.log(0);
    return 0;
  }
  console.log(res);
  return res;
};

reverse(124);
