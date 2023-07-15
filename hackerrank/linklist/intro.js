class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  addNode(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return null;
    }

    let iteratorNode = this.head;

    let previousNode = iteratorNode;
    while (iteratorNode.next) {
      previousNode = iteratorNode;
      iteratorNode = iteratorNode.next;
    }
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.next = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      counter++;
      current = current.next;
    }

    return current;
  }
  inset(index, value) {
    if (index < 0 || index >= this.length) return undefined;

    const newNode = new ListNode(value);

    const previousNode = this.get(index - 1);

    newNode.next = previousNode.next;

    previousNode.next = newNode;
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  deletNode(value) {
    if (value === this.head.data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.data !== value) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
  }
}
// [1] => [10] => [20]  => [30]
const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);

list.inset(2, 25);

list.traverse();
// list.deletNode(50);
// console.log("----------------------------");
// list.traverse();
