/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let usedc = {};
  let usedt = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (usedc[s[i]] && usedc[s[i]] !== t[i]) ||
      (usedt[t[i]] && usedt[t[i]] !== s[i])
    ) {
      return false;
    }
    usedc[s[i]] = t[i];
    usedt[t[i]] = s[i];
  }
  return true;
};

var s = "egg";
var t = "add";

// var s = "foo";
// var t = "bar";
console.log(isIsomorphic(s, t));
