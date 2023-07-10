function rotateLeft(d, arr) {
  // Write your code here
  d = d % arr.length;

  let right = arr.slice(d);
  let left = arr.slice(0, d);

  return [...right, ...left];
}
