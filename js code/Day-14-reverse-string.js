// 344. Reverse String
// https://leetcode.com/problems/reverse-string/description/
//  * Difficulty: easy

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// sol1:using for loop
//
// Time Complexity: O(n) (Iterates over s twice).
// Space Complexity: O(n) (Uses extra array rev).
var reverseString = function (s) {
  let rev = [];
  for (let i = s.length - 1; i >= 0; i--) rev.push(s[i]);
  for (let i = 0; i < s.length; i++) s[i] = rev[i];
  return rev;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]

// sol2:using spread operator
// Time Complexity: O(n)
// Space Complexity: O(n)

var reverseString1 = function (s) {
  let rev1 = [...s];
  for (let i = 0; i < s.length; i++) {
    s[i] = rev1[s.length - 1 - i];
  }
  return s;
};

console.log(reverseString1(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]

// sol3:using two-pointer technique (swap method)
// Time Complexity: O(n)
// Space Complexity: O(1) (No extra array)

var reverseString2 = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
};
console.log(reverseString2(["h", "e", "l", "l", "o"])); // ["o","l","l","e","h"]
