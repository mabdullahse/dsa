const ALPHABETICS = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

function print_encoding(ques, ans = "") {
  if (ques.length === 0) {
    console.log(ans);
    return;
  }

  let first_letter = +ques.charAt(0);

  if (first_letter !== 0) {
    // const numStr = ques.toString().substring(1);
    // console.log("====>", ques, numStr, ans + ALPHABETICS[+first_letter]);
    // if (numStr[0] !== "0") {
    print_encoding(ques.substring(1), ans + ALPHABETICS[first_letter]);
    // }
  }

  let first_two = ques.substring(0, 2);

  if (+first_two >= 10 && +first_two <= 26) {
    print_encoding(ques.substring(2), ans + ALPHABETICS[first_two]);
  }
}

function printEncodings(input, output = "") {
  // Base case: if the input is empty, print the output
  if (input.length === 0) {
    console.log(output);
    return;
  }

  // Recursive case 1: take one digit at a time and map it to the corresponding alphabet
  const digit = Number(input[0]);
  if (digit !== 0) {
    const char = String.fromCharCode(96 + digit); // Mapping digit to alphabet (a=1, b=2, ... , z=26)
    printEncodings(input.slice(1), output + char);
  }

  // Recursive case 2: take two digits at a time if possible and map them to the corresponding alphabet
  if (input.length >= 2) {
    const twoDigits = Number(input.slice(0, 2));
    if (twoDigits >= 10 && twoDigits <= 26) {
      const char = String.fromCharCode(96 + twoDigits); // Mapping two digits to alphabet
      printEncodings(input.slice(2), output + char);
    }
  }
}

print_encoding("12103", "");
console.log("---------------");
printEncodings("12103", "");
