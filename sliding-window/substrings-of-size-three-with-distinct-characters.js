// 1876

function isUnique(str) {
  return new Set(str).size === str.length;
}

var countGoodSubstrings = function (s) {
  let collection = [];

  let start = 0;
  let sub;
  while (start <= s.length - 3) {
    sub = s.substr(start, 3);

    if (isUnique(sub)) {
      collection.push(sub);
    }

    start++;
  }
  return collection;
};
console.log(countGoodSubstrings("aababcabc"));
