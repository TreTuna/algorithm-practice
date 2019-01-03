var Tree = function(value){
  this.value = value;
  this.children = [];
};

var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

Tree.prototype.BFSelect = function(filter) {
  var results = [];
  var queue = [];
  debugger;

  var checkNode = function(node, depth) {
    if (filter(node.value, depth)) {
      results.push(node.value);
    }
    node.children.forEach(function(child) {
      var nextChild = {node: child, depth: depth + 1}
      queue.push(nextChild);
    });

    if (queue.length > 0) {
      var nextNode = queue.shift();
      checkNode(nextNode.node, nextNode.depth);
    } else { return; };
  }

  checkNode(this, 0)
  return results;
};


/**
 * You shouldn't need to change anything below here, but feel free to look.
 */

/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
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

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
