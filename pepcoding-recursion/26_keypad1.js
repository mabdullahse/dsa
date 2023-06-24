let obj = {
  0: ",;",
  1: "abc",
  2: "def",
  3: "ghi",
  4: "jkl",
  5: "mno",
  6: "pqrs",
  7: "tu",
  8: "uvwx",
  9: "yz",
};
function print(num, ans) {
  if (num.toString().length === 1) {
    return obj[num].split("");
  }

  const firstLetter = num.toString().charAt(0);
  const req = num.toString().substring(1);

  var result1 = print(req); // 78 ka reuslt = [we,rwer,trrt]

  let sen = obj[+firstLetter];
  let res = [];

  for (let i = 0; i < sen.length; i++) {
    for (let j = 0; j < result1.length; j++) {
      res.push(sen[i] + result1[j]);
    }
  }

  return res;
}

console.log(print(678, ""));
