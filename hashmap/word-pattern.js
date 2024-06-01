/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  let store = {};

  for (let i = 0; i < pattern.length; i++) {
    if (
      (store[pattern[i]] && store[pattern[i]] !== s[i]) ||
      (store[pattern[i]] && Object.values(store).includes(s[i]))
    ) {
      return false;
    }
    store[pattern[i]] = s[i];
  }

  return true;
};

var pattern = "abba";
var s = "dog cat cat dog";
//
// var pattern = "abba";
// var s = "dog dog dog dog";

console.log(wordPattern(pattern, s));
