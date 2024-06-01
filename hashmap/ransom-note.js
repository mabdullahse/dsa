/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let store = {};

  for (const letter of magazine) {
    store[letter] = (store[letter] || 0) + 1;
  }

  for (const key of ransomNote) {
    if (!store[key] || store[key] < 1) return false;
    store[key]--;
  }

  return true;
};

var ransomNote = "a";
var magazine = "b";
// var ransomNote = "aa";
// var magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
