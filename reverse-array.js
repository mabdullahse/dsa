function reverse(ary, idx) {
  if (ary.length === idx) return;
  reverse(ary, idx + 1);
  console.log(ary[idx]);
}

var ary = [10, 22, 33, 44, 55, 66, 77, 8, 99];
reverse(ary, 0);
