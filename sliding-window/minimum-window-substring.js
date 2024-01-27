/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

function minWindow(s, t) {
  if (!t.length || !s.length || t.length > s.length || t === "") return "";

  let needCharmap = {};
  let windowMap = {};
  let needTohave = 0;

  for (const char of t) {
    if (!needCharmap[char]) {
      needTohave++;
    }
    needCharmap[char] = (needCharmap[char] || 0) + 1;
  }

  let resultLength = Infinity;
  let currentHave = 0;
  let result = [0, 0];
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    windowMap[char] = (windowMap[char] || 0) + 1;

    if (
      needCharmap[char] !== undefined &&
      windowMap[char] === needCharmap[char]
    ) {
      currentHave++;
    }

    while (currentHave === needTohave) {
      if (right - left + 1 < resultLength) {
        resultLength = right - left + 1;
        result = [left, right];
      }

      windowMap[s[left]]--;

      if (
        needCharmap[s[left]] !== undefined &&
        windowMap[s[left]] < needCharmap[s[left]]
      ) {
        currentHave--;
      }

      left++;
    }
  }

  return resultLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
}

const minWindow_copy = (s, t) => {
  if (!s.length || !t.length || s.length < t.length) return "";
  if (s === t) return s;

  let neededCharsMap = {};
  let windowMap = {};
  let needToHave = 0;

  for (let c of t) {
    if (!neededCharsMap[c]) {
      needToHave++;
    }
    neededCharsMap[c] = (neededCharsMap[c] || 0) + 1;
  }

  console.log(neededCharsMap, needToHave);
  let currentlyHave = 0;
  let result = [];
  let resultLength = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;

    if (neededCharsMap[char] && windowMap[char] === neededCharsMap[char]) {
      currentlyHave++;
    }

    while (currentlyHave === needToHave) {
      // while currentlyHave is equal to needToHave.
      // This means that we found a possible solution and thus we store it in the result variable.
      // Of course we store it only if it's length is smaller from the previous result.

      // size of current window = right - left + 1
      if (right - left + 1 < resultLength) {
        result = [left, right];
        resultLength = right - left + 1;
      }

      // squzing the window :  pop from left of window
      windowMap[s[left]]--;

      if (
        neededCharsMap[s[left]] &&
        windowMap[s[left]] < neededCharsMap[s[left]]
      ) {
        currentlyHave--;
      }

      // We keep moving our left-index to the right to narrow our window until we break our while statement.
      left++;
    }

    //Then, the for-loop will take over moving right-index to the right.
  }
  return resultLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
};

var minWindow2 = function (s, t) {
  if (s.length < t.length) return "";

  let left = 0,
    right = 0;

  let result;

  let tObj = {};

  for (const letter of t) {
    tObj[letter] = tObj[letter] + 1 || 1;
  }

  while (left < s.length) {
    if (!tObj[s[left]]) {
      left++;
      right++;
      continue;
    }

    if (tObj[s[left]]) {
      right = left;
      let cloneTobj = { ...tObj };

      while (right < s.length) {
        if (cloneTobj[s[right]]) {
          cloneTobj[s[right]]--;
        } else {
          right++;
          continue;
        }
        let isAllfound = Math.max(...Object.values(cloneTobj));
        if (isAllfound < 1) {
          let findRsult = s.substr(left, right - left + 1);

          if (!result) {
            result = findRsult;
          }
          if (findRsult.length < result.length) {
            result = findRsult;
          }

          right++;
          break;
        }
        right++;
      }
    }

    // if (right >= s.length) {
    //   break;
    // }
    left++;
  }
  return result ? result : "";
};

// s = "ADOBECODEBANC", t = "ABC"
// console.log(minWindow("bdab", "ab"));
// console.log(minWindow("a", "a"));
// console.log(minWindow("bba", "ab"));
console.log(minWindow("ADOBECOEBANC", "ABC"));
