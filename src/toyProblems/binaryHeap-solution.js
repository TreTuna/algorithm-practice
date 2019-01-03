function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}
// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}
BinaryHeap.prototype.insert = function (value) {
  // TODO: Your code here
}
BinaryHeap.prototype.removeRoot = function () {
  // TODO: Your code here
}


// **** Solution Code



// BinaryHeap.prototype.insert = function (node) {
// add node to end of heap
this._heap.push(node);
// locate new node and its parent
var index = this._heap.length - 1;
var parentIndex = Math.floor( (index - 1) / 2 );
// while node has parent and node is less than parent
while (index > 0 && this._compare(this._heap[index], this._heap[parentIndex]) ) {
  // swap node and parent
  swapNodesAt(index, parentIndex, this);
  index = parentIndex;
  parentIndex = Math.floor( (index - 1) / 2);
}
}

BinaryHeap.prototype.removeRoot = function () {
  // swap root node with last node
  swapNodesAt(this._heap.length - 1, 0, this);
  // remove last node and store it to be returned later
  var originalRoot = this._heap.pop();
  var temporaryRootIndex = 0;
  // compare children nodes to get the index of the lesser of them
  var lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);
  // while there are children nodes and the lesser of them is less than the  new root
  while ( lesserChildIndex && this._compare(this._heap[lesserChildIndex], this._heap[temporaryRootIndex]) ) {
    // swap the root node with the lesser of its children
    swapNodesAt(lesserChildIndex, temporaryRootIndex, this);
    temporaryRootIndex = lesserChildIndex;
    lesserChildIndex = getLesserChildIndex(temporaryRootIndex, this);
  }
  // return original root node we stored earlier
  return originalRoot;
}

// some helper functions
// notice this takes a binaryHeap as an argument
function swapNodesAt(index, parentIndex, binaryHeap) {
  var heap = binaryHeap._heap;
  var temp = heap[index];
  heap[index] = heap[parentIndex];
  heap[parentIndex] = temp;
}

function getLesserChildIndex (parentIndex, binaryHeap) {
  // locate children
  var childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function(index) {
    return index < binaryHeap._heap.length;
  });
  // compare children nodes to get the index of the lesser of them
  // we are using the protoype method _compare which should not be altered
  // this would not work if we want to pass in our own comparator function into the insert or removeRoot methods
  if ( binaryHeap._compare(binaryHeap._heap[childIndices[1]], binaryHeap._heap[childIndices[0]]) ) {
    return childIndices[1];
  } else {
    return childIndices[0];
  }
}