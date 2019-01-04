import { Tree } from "./treeDepthFirstSelect";
// Tree Depth-First Select
// Implement a depth-first method on a tree class.
//
// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.
//
// Example:

let root1 = new Tree(1);
let branch2 = root1.addChild(2);
let branch3 = root1.addChild(3);
let leaf4 = branch2.addChild(4);
let leaf5 = branch2.addChild(5);
let leaf6 = branch3.addChild(6);
let leaf7 = branch3.addChild(7);

root1.DFSelect(function(value, depth) {
  return value % 2 === 1;
}); //=> [1, 5, 3, 7]

root1.DFSelect(function(value, depth) {
  return depth === 1;
}); //=> [2, 3]
// Your Code Should Pass:

describe("Tree", function() {
  it("should exist", function() {
    // Oh no! the `Tree` class doesn't exist but it was provided for you. Maybe
    // you deleted the code that defines the class by mistake?
    expect(Tree).toBeDefined();
  });
});

describe("DFSelect", function() {
  it("should exist on the Tree prototype", function() {
    expect(Tree.prototype.DFSelect).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof Tree.prototype.DFSelect).toBe("function");
  });

  it("should return an array", function() {
    let root = new Tree("root");
    let all = function() {
      return true;
    };
    expect(Array.isArray(root.DFSelect(all))).toBe(true);
  });

  it("should return all nodes in the tree if filter always returns true", function() {
    // this filter function should always return all of the nodes
    let all = function() {
      return true;
    };
    // keep a list of all nodes to compare
    // depth: 0
    let root = new Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    let expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];

    // we should expect back all the nodes we added
    let result = root.DFSelect(all);
    expect(result).toHaveLength(expected.length);
    expect(result).toEqual(expected);
  });

  it("should return all nodes passing the filter", function() {
    // this filter function should return all true nodes
    let trueFilter = function(value, depth) {
      return value === true;
    };
    // this filter function should return all false nodes
    let falseFilter = function(value, depth) {
      return value === false;
    };
    // keep a list of true and false nodes to compare
    let trueNodes = [],
      falseNodes = [],
      result = null;
    // depth: 0
    let root = new Tree(false);
    falseNodes.push(false);
    // depth: 1
    trueNodes.push(true), root.addChild(true);
    falseNodes.push(false), root.addChild(false);
    // depth: 2
    trueNodes.push(true), root.children[0].addChild(true);
    trueNodes.push(true), root.children[1].addChild(true);
    falseNodes.push(false), root.children[0].addChild(false);
    falseNodes.push(false), root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true), root.children[0].children[0].addChild(true);
    trueNodes.push(true), root.children[1].children[0].addChild(true);
    falseNodes.push(false), root.children[0].children[1].addChild(false);
    falseNodes.push(false), root.children[1].children[1].addChild(false);

    result = root.DFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    expect(result).toEqual(trueNodes);

    result = root.DFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    expect(result).toEqual(falseNodes);
  });

  it("should allow filtering by depth", function() {
    // this filter constructor produces a filter for the specified depth
    let depthFilter = function(filterDepth) {
      return function(node, nodeDepth) {
        return filterDepth == nodeDepth;
      };
    };
    // keep a list of nodes by depth to compare
    let nodeDepths = [],
      deepNodes = [];
    let root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    root.addChild(1);
    root.addChild(2);
    nodeDepths.push([1, 2]);
    // depth: 2
    root.children[0].addChild(3);
    root.children[0].addChild(4);
    root.children[1].addChild(5);
    root.children[1].addChild(6);
    nodeDepths.push([3, 4, 5, 6]);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(7);
    root.children[0].children[0].addChild(8);
    root.children[1].children[0].addChild(9);
    root.children[1].children[0].addChild(10);
    nodeDepths.push([7, 8, 9, 10]);

    expect(root.DFSelect(depthFilter(0))).toEqual(nodeDepths[0]);
    expect(root.DFSelect(depthFilter(1))).toEqual(nodeDepths[1]);
    expect(root.DFSelect(depthFilter(2))).toEqual(nodeDepths[2]);
    expect(root.DFSelect(depthFilter(3))).toEqual(nodeDepths[3]);
  });
});
