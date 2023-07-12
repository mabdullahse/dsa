function arrayManipulation(n, queries) {
  // Write your code here

  const result = Array(n + 1).fill(0);

  for (const query of queries) {
    const [start, end, k] = query;

    for (let i = start; i <= end; i++) {
      result[i] += k;
    }
  }

  return Math.max(...result);
}

function arrayManipulation2(n, queries) {
  // Write your code here

  const result = Array(n + 1).fill(0);
  let max = queries[0][2];

  for (const query of queries) {
    const [start, end, k] = query;

    for (let i = start; i <= end; i++) {
      result[i] += k;
      if (result[i] > max) {
        max = result[i];
      }
    }
  }
  return max;
}
function arrayManipulation3(n, queries) {
  const arr = Array(n + 1);
  let maxValue = 0,
    currentNumber = 0;
  queries.forEach(([startRange, endRange, value]) => {
    arr[startRange] = arr[startRange] || { start: 0, end: 0 };
    arr[endRange] = arr[endRange] || { start: 0, end: 0 };
    arr[startRange].start += value;
    arr[endRange].end += value;
  });

  console.log(arr);
  arr.forEach((cell) => {
    if (cell) {
      currentNumber += cell.start;
      if (currentNumber > maxValue) {
        maxValue = currentNumber;
      }
      currentNumber -= cell.end;
    }
  });
  return maxValue;
}

function arrayManipulation4(n, queries) {
  // Write your code here

  let quriesResult = [];

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];

    if (!quriesResult[a]) {
      quriesResult[a] = { start: 0, end: 0 };
    }
    if (!quriesResult[b]) {
      quriesResult[b] = { start: 0, end: 0 };
    }

    quriesResult[a].start = k + quriesResult[a]?.start;
    quriesResult[b].end = k + quriesResult[b]?.end;
  }
  let maxResult = -Infinity;
  let currentValue = 0;

  for (let i = 0; i < quriesResult.length; i++) {
    if (quriesResult[i]) {
      currentValue += quriesResult[i].start;
      if (maxResult < currentValue) {
        maxResult = currentValue;
      }
      currentValue -= quriesResult[i].end;
    }
  }
  return maxResult;
}

console.log(
  arrayManipulation4(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ])
);
