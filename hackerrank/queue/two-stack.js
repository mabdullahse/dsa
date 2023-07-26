class Queue {
  constructor() {
    this.input = [];
    this.output = [];
  }

  enqueue(value) {
    this.input.push(value);
  }

  dequeue() {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output.pop();
  }
  peek() {
    if (this.output.length === 0) {
      while (this.input.length) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[this.output.length - 1];
  }
}

function twoStack(operations) {
  // let operations = input.split('\n').map(item=> item.split(" "));
  const queu = new Queue();
  for (const op of operations) {
    switch (op[0]) {
      case 1:
        queu.enqueue(op[1]);

        break;
      case 2:
        queu.dequeue();

        break;
      case 3:
        console.log(queu.peek());

        break;

      default:
        break;
    }
  }
}

function twoStack0(operations) {
  let queue = [];
  for (const op of operations) {
    switch (op[0]) {
      case 1:
        queue.push(op[1]);
        break;
      case 2:
        queue.shift();

        break;
      case 3:
        console.log(queue[0]);

        break;

      default:
        break;
    }
  }
}

const queu = new Queue();
queu.enqueue(5);
queu.enqueue(10);
queu.enqueue(15);
console.log(queu.dequeue());
queu.enqueue(25);
queu.enqueue(210);
queu.enqueue(215);
console.log(queu.peek());
console.log(queu.dequeue());
// console.log(
//   twoStack([
//     [1, 42],
//     [2],
//     [1, 14],
//     [3],
//     [1, 28],
//     [3],
//     [1, 60],
//     [1, 78],
//     [2],
//     [2],
//   ])
// );
