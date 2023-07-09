// https://www.youtube.com/watch?v=vhUxKxiconE&t=642s&ab_channel=AnujBhaiya
// previous-smaller-element.js
class Stack {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
  }
  pop() {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  isEmpty() {
    return this.data.length > 0 ? false : true;
  }
}

function previousSmallerElement(list) {
  const result = [];
  const stackInstance = new Stack();

  for (let i = 0; i < list.length; i++) {
    while (!stackInstance.isEmpty() && list[stackInstance.peek()] >= list[i]) {
      stackInstance.pop();
    }

    if (stackInstance.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stackInstance.peek());
    }
    stackInstance.add(i);
  }
  return result;
}

function nextSmallerElement(list) {
  const result = [];
  const stackInstance = new Stack();

  for (let i = list.length - 1; i >= 0; i--) {
    while (!stackInstance.isEmpty() && stackInstance.peek() >= list[i]) {
      stackInstance.pop();
    }

    if (stackInstance.isEmpty()) {
      result.unshift(-1);
    } else {
      result.unshift(stackInstance.peek());
    }
    stackInstance.add(list[i]);
  }
  return result;
}

function nextSmallerElementIndex(list) {
  const result = [];
  const stackInstance = new Stack();

  for (let i = list.length - 1; i >= 0; i--) {
    while (!stackInstance.isEmpty() && list[stackInstance.peek()] >= list[i]) {
      stackInstance.pop();
    }

    if (stackInstance.isEmpty()) {
      result.unshift(list.length);
    } else {
      result.unshift(stackInstance.peek());
    }
    stackInstance.add(i);
  }
  return result;
}

function largestRectangle(list) {
  const previousSmallerList = previousSmallerElement(list);
  const nextSmallerElementList = nextSmallerElementIndex(list);
  let max = -Infinity;
  for (let i = 0; i < list.length; i++) {
    let lcalLength = nextSmallerElementList[i] - previousSmallerList[i];

    let localMax = (lcalLength - 1) * list[i];
    if (localMax > max) {
      max = localMax;
    }
  }
  return max;
}

var list = [4, 10, 5, 8, 20, 15, 3, 12];
var list3 = [3, 10, 5, 1, 15, 10, 7, 6];
var list2 = [4, 2, 1, 5, 6, 3, 2, 4, 2];
var list4 = [3, 10, 5, 1, 15, 10, 7, 6];
// console.log(nextSmallerElement(list4));
// console.log(nextSmallerElementIndex(list4));
console.log(largestRectangle([1, 2, 3, 4, 5]));
