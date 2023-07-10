function dynamicArray(n, queries) {
  // Write your code here
  let arr = [];
  let result = [];
  let lastAnswer = 0;

  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  const getIndex = (x) => {
    return (x ^ lastAnswer) % n;
  };
  const queryOne = (x, y) => {
    const indx = getIndex(x);
    arr[indx].push(y);
  };

  const queryTwo = (x, y) => {
    const indx = getIndex(x);
    let s = arr[indx].length;
    let z = y % s;

    lastAnswer = arr[indx][z];
    result.push(lastAnswer);
  };

  for (let query of queries) {
    if (query[0] === 1) {
      queryOne(query[1], query[2]);
    } else if (query[0] === 2) {
      queryTwo(query[1], query[2]);
    }
  }

  return result;
}
