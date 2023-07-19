function twoStacks(maxSum, a, b) {
  let ans = 0;
  let pointer1 = 0;
  let pointer2 = 0;
  let sum = 0;
  while (true) {
    if (a[pointer1] && b[pointer2] && a[pointer1] < b[pointer2]) {
      sum += a[pointer1];
      pointer1++;
      ans++;
    } else if (a[pointer1] && b[pointer2] && a[pointer1] > b[pointer2]) {
      sum += b[pointer2];
      pointer2++;
      ans++;
    } else if (a[pointer1] && !b[pointer2]) {
      sum += a[pointer1];
      pointer1++;
      ans++;
    } else if (b[pointer2] && !b[pointer1]) {
      sum += b[pointer2];
      pointer2++;
      ans++;
    }

    if (sum > maxSum) {
      return --ans;
    }
  }
}

let a = [4, 2, 4, 6, 1];
let b = [2, 1, 8, 5];

console.log(twoStacks(10, a, b));

function twoStacks2(maxSum, a, b) {
  // Write your code here

  let resultCount = 0;
  let totalSum = 0,
    st1_count = 0,
    st2_count = 0;

  // Read all from stack a;
  for (let item of a) {
    if (totalSum + item <= maxSum) {
      totalSum += item;
      st1_count++;
    } else {
      break;
    }
  }
  resultCount = st1_count;

  // read from stack b,
  for (let item of b) {
    totalSum += item;
    st2_count++;

    while (totalSum > maxSum && st1_count > 0) {
      totalSum = totalSum - a[st1_count - 1];
      st1_count--;
    }

    resultCount =
      totalSum <= maxSum
        ? Math.max(st2_count + st1_count, resultCount)
        : resultCount;
  }

  return resultCount;
}
