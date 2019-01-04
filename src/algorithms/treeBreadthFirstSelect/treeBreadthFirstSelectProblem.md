Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.

Example:

let root1 = new Tree(1);
let branch2 = root1.addChild(2);
let branch3 = root1.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
return depth === 1;
}) //=> [2, 3]

Given Code:

let Tree = function(value){
this.value = value;
this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
let queue = new Queue();

//Your code here

};

/!\*\*

- You shouldn't need to change anything below here, but feel free to look.
  \*!/

/!\*\*

- add an immediate child
- (wrap values in Tree nodes if they're not already)
  \*!/
  Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
  child = new Tree(child);
  }

if(!this.isDescendant(child)){
this.children.push(child);
}else {
throw new Error('That child is already a child of this tree');
}
// return the new child node for convenience
return child;
};

/!\*\*

- check to see if the provided tree is already a child of this
- tree **or any of its sub trees**
  \*!/
  Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
  // `child` is an immediate child of this tree
  return true;
  }else{
  for(let i = 0; i < this.children.length; i++){
  if(this.children[i].isDescendant(child)){
  // `child` is descendant of this tree
  return true;
  }
  }
  return false;
  }
  };

/!\*\*

- remove an immediate child
  \*!/
  Tree.prototype.removeChild = function(child){
  let index = this.children.indexOf(child);
  if(index !== -1){
  // remove the child
  this.children.splice(index,1);
  }else{
  throw new Error('That node is not an immediate child of this tree');
  }
  };
