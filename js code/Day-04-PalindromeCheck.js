// 9. Palindrome Number
//  https://leetcode.com/problems/palindrome-number/
// * Difficulty: Easy

var isPalindrome = function (x) {
  if (x < 0) return false;
  let xstr = x.toString().trim();
  let rev = xstr.split("").reverse().join("");

  if (xstr === rev) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

isPalindrome(121);
