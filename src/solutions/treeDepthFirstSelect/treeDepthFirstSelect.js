export function Tree(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.DFSelect = function(filter) {
  let results = [];
  let checkNodes = function(node, depth) {
    if (filter(node.value, depth)) {
      results.push(node.value);
    }
    for (let i = 0; i < node.children.length; i++) {
      checkNodes(node.children[i], depth + 1);
    }
  };

  checkNodes(this, 0);
  return results;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
