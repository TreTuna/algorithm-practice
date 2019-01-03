var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {
  var results = [];
  var checkNodes = function(node, depth){

    if(filter(node.value, depth)){
      results.push(node.value);
    }
    for(var i = 0; i < node.children.length; i++){
      checkNodes(node.children[i], depth + 1);
    }
  };

  checkNodes(this, 0);
  return results;
};

// ***** Solution checkNodes

// Tree.prototype.DFSelect = function (filter) {
//   var results = [];
//   var subroutine = function(node,depth) {
//     if (filter(node.value, depth)) {
//       results.push(node.value);
//     }
//     for (var i = 0; i < node.children.length; i++) {
//       var child = node.children[i];
//       subroutine(child,depth+1);
//     }
//   };

//   subroutine(this,0);

// ``` javascript
//   // immediately invoked function execution
//   // http://benalman.com/news/2010/11/immediately-invoked-function-expression/
//   (function subroutine(node,depth) {
//     if (filter(node.value, depth)) {
//       results.push(node.value);
//     }
//     for (var i = 0; i < node.children.length; i++) {
//       var child = node.children[i];
//       subroutine(child,depth+1);
//     }
//   })(this, 0);
// ```

//   return results;
// };

// // recurisvely on itself
// Tree.prototype.DFSelect = function (filter, depth) {
//   depth = depth || 0;
//   var rootSelection = filter(this.value, depth) ?
//     [this.value] : [];
//   var childSelections = this.children.map(function(child) {
// 	return child.DFSelect(filter, depth + 1);
//   });
//   // using [].concat because we need array method concat
//   // using ['a', 'b', 'c'].concat would have worked, but ''.concat wouldn't
//   // more info on apply - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//   return [].concat.apply(rootSelection, childSelections);
// };

// ******** End Solution Code

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

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

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
