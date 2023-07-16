class Node {
  constructor(data) {
    this.next = null;
    this.prev = null;
    this.data = data;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return;
    }

    const popNode = this.tail;
    this.tail = popNode.prev;
    this.tail.next = null;
    popNode.prev = null;
    this.length--;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    const unshiftNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = unshiftNode.next;
      this.head.prev = null;

      unshiftNode.next = null;
    }

    this.length--;
    return unshiftNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;

      newNode.next = oldHead;
      oldHead.prev = newNode;

      this.head = newNode;
    }

    this.length++;
  }

  get(position) {
    if (!this.head) return undefined;

    let node = this.head;

    if (Math.floor(this.length / 2) < position) {
      let counter = 0;
      while (counter !== position) {
        node = node.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;

      while (counter) {
        node = node.prev;
        counter--;
      }
    }

    return node;
  }
  insert(position, value) {
    const newNode = new Node(value);
    const targetPositionNode = this.get(position);

    const nextNode = targetPositionNode.next;
  }
  print() {
    let node = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const list = new DoubleLinkedList();

list.push(0);
list.push(11);
list.push(22);
list.push(33);
list.push(44);
list.push(55);
list.push(66);
list.push(77);
list.push(88);
list.push(99);
list.print();
console.log("------------");
// list.unshift(1);
// list.print();
console.log("------------");
// list.pop();
// list.print();

console.log(list.get(8));
