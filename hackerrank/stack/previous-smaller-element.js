// https://www.youtube.com/watch?v=_RtghJnM1Qo&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=43&ab_channel=AnujBhaiya

function previousSmallerElement(list) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    let left = i;

    if (!list[i - 1]) {
      result.push(-1);
      continue;
    } else {
      let found = false;
      while (list[left - 1]) {
        if (list[left - 1] < list[i]) {
          result.push(list[left - 1]);
          found = true;
          break;
        }

        left--;
      }

      if (!found) {
        result.push(-1);
      }
    }
  }

  return result;
}

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

function previousSmallerElement2(list) {
  let result = [];

  const stackInstance = new Stack();

  for (let i = 0; i < list.length; i++) {
    let item = stackInstance.peek();

    if (!item) {
      result.push(-1);
      stackInstance.add(list[i]);
    } else if (item < list[i]) {
      result.push(item);
      stackInstance.add(list[i]);
    } else if (item > list[i]) {
      while (true) {
        stackInstance.pop();
        let itemNew = stackInstance.peek();
        if (!itemNew) {
          result.push(-1);
          stackInstance.add(list[i]);
          break;
        } else if (itemNew < list[i]) {
          result.push(itemNew);
          stackInstance.add(list[i]);
          break;
        }
      }
    }
  }
  return result;
}

function previousSmallerElement3(list) {
  let result = [];

  const stackInstance = new Stack();

  for (let i = 0; i < list.length; i++) {
    while (!stackInstance.isEmpty() && stackInstance.peek() >= list[i]) {
      stackInstance.pop();
    }

    let dd = stackInstance.isEmpty();
    if (stackInstance.isEmpty()) {
      result.push(-1);
    } else {
      result.push(stackInstance.peek());
    }
    stackInstance.add(list[i]);
  }
  return result;
}

var list = [4, 10, 5, 8, 20, 15, 3, 12];
// console.log(previousSmallerElement(list));
console.log(previousSmallerElement2(list));
console.log(previousSmallerElement3(list));
