// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/
//  * Difficulty: easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1
// var isAnagram = function (s, t) {
//   let s1 = s.split("").sort().join("");
//   let t1 = t.split("").sort().join("");
//   const ana = s1 === t1;
//   console.log(ana);
//   return ana;
// };
// isAnagram("anagram", "nagaram"); //true
// isAnagram("cat", "car"); //true

// solution2
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let objs = {};
  let objt = {};
  for (let i = 0; i < s.length; i++) {
    objs[s[i]] = (objs[s[i]] || 0) + 1;
    objt[t[i]] = (objt[t[i]] || 0) + 1;
  }
  for (let key in objs) {
    if (objs[key] !== objt[key]) return false;
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("cat", "car")); //false
