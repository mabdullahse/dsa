// https://github.com/anil-sidhu/dsa-with-js/blob/master/binary_search_tree.html

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor() {
    this.root = null;
  }
  makeTree(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  searchTreeOld(val) {
    if (!this.root) return false;
    if (this.root.value === val) return true;

    let root = this.root;
    while (true) {
      if (root.value > val) {
        root = root.left;
      } else {
        root = root.right;
      }
      if (root === null) return false;

      if (root.value === val) return true;
    }
    return false;
  }

  // Tree Includes
  searchTree(root, val) {
    if (!root) return false;
    if (root.value === val) return true;
    if (root.value > val) {
      return this.searchTree(root.left, val);
    } else {
      return this.searchTree(root.right, val);
    }
  }
  // V2: Searching the node
  seachTreeV2(root, target) {
    if (!root) return false;
    if (root.value === target) return true;
    return seachTreeV2(root.left, target) || seachTreeV2(root.right, target);
  }

  preOrderTree(root) {
    if (root) {
      console.log(root.value);
      this.preOrderTree(root.left);
      this.preOrderTree(root.right);
    }
  }
  inOrderTree(root) {
    if (root) {
      this.inOrderTree(root.left);
      console.log(root.value);
      this.inOrderTree(root.right);
    }
  }
  postOrderTree(root) {
    if (root) {
      this.postOrderTree(root.left);
      this.postOrderTree(root.right);
      console.log(root.value);
    }
  }

  // Breath First Search
  //    A
  //   / \
  //  B   C
  // / \   \
  // D   E   F

  // => A B C D E F

  bfsTraversing() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      console.warn(current.value);
    }
  }

  // Depth First Search
  //    A
  //   / \
  //  B   C
  // / \   \
  // D   E   F

  // => A B D E C F
  depthFirstValues() {
    let stack = [this.root];

    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.value);

      if (current.right) {
        stack.push(current.right);
      }

      if (current.left) {
        stack.push(current.left);
      }
    }
  }

  // sum all the tree

  treeSum(root) {
    if (!root) return 0;

    return root.value + treeSum(root.left) + treeSum(root.left);
  }

  minValue(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minValue(root.left);
    }
  }
  maxValue(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxValue(root.right);
    }
  }

  removeNode(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) return null;

    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left && root.right) {
        return root.right;
      }

      if (root.left && !root.right) {
        return root.left;
      }

      if (root.left && root.right) {
        root.value = this.minValue(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
    }

    return root;
  }
}

let bst = new BSTree();

bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(23);

// console.log(bst.searchTree(bst.root, 12));

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root);
// console.warn(bst.search(bst.root, 11));
// bst.removeData(20);
// bst.bfsTraversing(bst.root);
// console.warn(bst.maxValue(bst.root));

console.log(bst);
bst.removeNode(10);
console.log(bst);
