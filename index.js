function largestRectangle(h) {
  // Write your code here
  let largestRectangle = null;

  for (let i = 0; i < h.length; i++) {
    for (let j = i; j < h.length; j++) {
      let adjacentBuilding = h.slice(i, j + 1);

      let localmin = Math.min(...adjacentBuilding);
      let locallargestRectangle = localmin * adjacentBuilding.length;

      if (!largestRectangle || locallargestRectangle > largestRectangle) {
        largestRectangle = locallargestRectangle;
      }
    }
  }

  return largestRectangle;
}

function largestRectangle2(h) {
  // Write your code here

  let maxRec = -Infinity;

  for (let i = 0; i < h.length; i++) {
    let left = i;
    let right = i;

    while (h[right + 1] && h[right + 1] >= h[i]) {
      right++;
    }
    while (h[left - 1] && h[left - 1] >= h[i]) {
      left--;
    }

    let length = (right - left + 1) * h[i];
    if (length > maxRec) {
      maxRec = length;
    }
  }
  return maxRec;
}

let height = [8979, 4570, 6436, 5083, 7780, 3269, 5400, 7579, 2324, 2116];
console.log(largestRectangle(height));
console.log(largestRectangle2(height));
// 26152
