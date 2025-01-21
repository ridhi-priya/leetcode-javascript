// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/
//  * Difficulty: easy

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let s1 = s.split("").sort().join("");
  let t1 = t.split("").sort().join("");
  const ana = s1 === t1;
  console.log(ana);
  return ana;
};
isAnagram("anagram", "nagaram"); //true
isAnagram("cat", "car"); //true
