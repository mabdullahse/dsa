var findSubstring = function (s, words) {
  let permutationLength = words.length * words[0].length;

  if (s.length < permutationLength || words.length === 0) return [];

  let wordsStore = {};
  words.forEach((element) => {
    wordsStore[element] = wordsStore[element] + 1 || 1;
  });

  let end = 0;
  let result = [];
  while (end <= s.length - permutationLength) {
    let getOneStrings = s.substring(end, end + words[0].length);

    let cloneSotore = { ...wordsStore };
    var i;
    for (i = 0; i < words.length; i++) {
      getOneStrings = s.substr(end + i * words[0].length, words[0].length);

      if (cloneSotore[getOneStrings] && cloneSotore[getOneStrings] > 0) {
        cloneSotore[getOneStrings]--;
      } else {
        break;
      }
    }

    if (i === words.length) {
      result.push(end);
    }
    // }

    end++;
  }

  return result;
};
var findSubstring2 = function (s, words) {
  let permutationLength = words.length * words[0].length;

  if (s.length < permutationLength || words.length === 0) return [];

  let wordsStore = {};
  words.forEach((element) => {
    wordsStore[element] = false;
  });

  let end = 0;
  let result = [];
  while (end < s.length) {
    let getOneStrings = s.substring(end, end + words[0].length);

    if (words.indexOf(getOneStrings) > -1) {
      let startIndex = end;
      let cloneSotore = { ...wordsStore };

      while (
        words.indexOf(getOneStrings) > -1 &&
        cloneSotore[getOneStrings] === false &&
        startIndex < s.length
      ) {
        cloneSotore[getOneStrings] = true;
        startIndex += words[0].length;

        getOneStrings = s.substring(startIndex, startIndex + words[0].length);
      }

      let checkAllmarked = Object.values(cloneSotore);
      let isAllMarked = checkAllmarked.indexOf(false) > -1 ? false : true;

      if (isAllMarked) {
        result.push(end);
        end += words[0].length;
      } else {
        end += words[0].length;
      }
    } else {
      end += words[0].length;
    }
  }

  return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
console.log(
  findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
);
