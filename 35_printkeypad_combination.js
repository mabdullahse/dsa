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
let count = 0;
function print(question, ans) {
  if (question.toString().length === 0) {
    count++;
    console.log(ans, count);
    return;
  }

  const firstLetter = question.toString().charAt(0);
  const restQuestion = question.toString().substring(1);

  let sen = obj[+firstLetter];
  for (let i = 0; i < sen.length; i++) {
    print(restQuestion, ans + sen[i]);
  }
}

console.log(print(678, ""));
