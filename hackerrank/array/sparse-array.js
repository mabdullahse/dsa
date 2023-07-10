function matchingStrings(stringList, queries) {
  // Write your code here

  let store = {};

  for (let item of stringList) {
    store[item] = store[item] + 1 || 1;
  }
  let result = [];
  queries.forEach((query) => {
    result.push(store[query] ?? 0);
  });

  return result;
}
