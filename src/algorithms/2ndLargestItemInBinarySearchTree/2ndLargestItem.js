// Write a function to find the 2nd largest element in a binary search tree

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};
BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const tree = new BinaryTreeNode(5);
tree.insertLeft(3);
tree.left.insertLeft(1);
tree.left.insertRight(4);
tree.insertRight(8);
tree.right.insertRight(12);
tree.right.insertLeft(7);
tree.right.right.insertLeft(10);
tree.right.right.left.insertLeft(9);
tree.right.right.left.insertRight(11);

function largestElement(rootNode) {
  if (!rootNode) {
    return new Error("Tree must have at least 1 node.");
  }
  let currentNode = rootNode;
  while (currentNode) {
    if (!currentNode.right) {
      return currentNode.value;
    }
    currentNode = currentNode.right;
  }
}

largestElement(tree); /*? */

function secondLargestElement(rootNode) {
  if (!rootNode && (!rootNode.left && !rootNode.right)) {
    return "Tree must have at least 2 nodes";
  }

  let currentNode = rootNode;

  while (currentNode) {
    console.log(currentNode.value);
    if (currentNode.left && !currentNode.right) {
      return largestElement(currentNode.left);
    }

    if (
      currentNode.right &&
      !currentNode.right.left &&
      !currentNode.right.right
    ) {
      return currentNode.value;
    }

    currentNode = currentNode.right;
  }
}

secondLargestElement(tree); /*? */
