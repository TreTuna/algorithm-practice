import { Tree } from "./treeBreadthFirstSelect";

describe("Tree", function() {
  it("should exist", function() {
    expect(Tree).toBeDefined();
  });
});

describe("BFSelect", function() {
  it("should exist on the Tree prototype", function() {
    expect(Tree.prototype.BFSelect).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof Tree.prototype.BFSelect).toBe("function");
  });

  it("should return an array", function() {
    let root = new Tree("root");
    let all = function() {
      return true;
    };
    expect(Array.isArray(root.BFSelect(all))).toBeTruthy();
  });

  it("should return all nodes in the tree if filter always returns true", function() {
    // this filter function should always return all of the nodes
    let all = function() {
      return true;
    };
    let equal;
    // keep a list of all nodes to compare
    // depth: 0
    let root = new Tree(1);
    let expected = [1];
    // depth: 1
    expected.push(2);
    root.addChild(2);
    expected.push(3);
    root.addChild(3);
    // depth: 2
    expected.push(4);
    root.children[0].addChild(4);
    expected.push(5);
    root.children[0].addChild(5);
    expected.push(6);
    root.children[1].addChild(6);
    expected.push(7);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8);
    root.children[0].children[0].addChild(8);
    expected.push(9);
    root.children[1].children[1].addChild(9);

    // we should expect back all the nodes we added
    let result = root.BFSelect(all);
    expect(result).toHaveLength(expected.length);

    // make sure the result array contains all the expected values
    for (let i = 0; i < expected.length; i++) {
      // ie., `expected[i]` should be somewhere in `result`
      expect(result).toEqual(expect.arrayContaining([expected[i]]));
    }
  });

  it("should filter nodes in breadth-first order", function() {
    // this filter function should always return all of the nodes
    let all = function() {
      return true;
    };
    // keep a list of all nodes in breadth-first order to compare
    // depth: 0
    let root = new Tree(1);
    let expected = [1];
    // depth: 1
    expected.push(3);
    root.addChild(3);
    expected.push(2);
    root.addChild(2);
    // depth: 2
    expected.push(4);
    root.children[0].addChild(4);
    expected.push(5);
    root.children[0].addChild(5);
    expected.push(6);
    root.children[1].addChild(6);
    expected.push(7);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    expected.push(8);
    root.children[0].children[0].addChild(8);
    expected.push(9);
    root.children[1].children[1].addChild(9);

    let result = root.BFSelect(all);
    // make sure the result array is in breadth-first order
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
    trueNodes.push(true);
    root.addChild(true);
    falseNodes.push(false);
    root.addChild(false);
    // depth: 2
    trueNodes.push(true);
    root.children[0].addChild(true);
    trueNodes.push(true);
    root.children[1].addChild(true);
    falseNodes.push(false);
    root.children[0].addChild(false);
    falseNodes.push(false);
    root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true);
    root.children[0].children[0].addChild(true);
    trueNodes.push(true);
    root.children[1].children[0].addChild(true);
    falseNodes.push(false);
    root.children[0].children[1].addChild(false);
    falseNodes.push(false);
    root.children[1].children[1].addChild(false);

    result = root.BFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    expect(result.length).toBe(trueNodes.length);
    for (let i = 0; i < trueNodes.length; i++) {
      // ie., `trueNodes[i]` should be somewhere in `result`
      expect(result).toEqual(expect.arrayContaining([trueNodes[i]]));
    }

    result = root.BFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    expect(result.length).toBe(falseNodes.length);
    for (let i = 0; i < falseNodes.length; i++) {
      expect(result).toEqual(expect.arrayContaining([falseNodes[i]]));
    }
  });

  it("should allow filtering by depth", function() {
    // keep a list of nodes by depth to compare
    let nodeDepths = [],
      deepNodes = [];
    let root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    deepNodes = [];
    deepNodes.push(1);
    root.addChild(1);
    deepNodes.push(2);
    root.addChild(2);
    nodeDepths.push(deepNodes);
    // depth: 2
    deepNodes = [];
    deepNodes.push(3);
    root.children[0].addChild(3);
    deepNodes.push(4);
    root.children[0].addChild(4);
    deepNodes.push(5);
    root.children[1].addChild(5);
    deepNodes.push(6);
    root.children[1].addChild(6);
    nodeDepths.push(deepNodes);
    // depth: 3 (sparse)
    deepNodes = [];
    deepNodes.push(3);
    root.children[0].children[0].addChild(3);
    deepNodes.push(4);
    root.children[0].children[0].addChild(4);
    deepNodes.push(5);
    root.children[1].children[0].addChild(5);
    deepNodes.push(6);
    root.children[1].children[0].addChild(6);
    nodeDepths.push(deepNodes);

    // helper functions for the tests

    // this filter constructor produces a filter for the specified depth
    let depthFilter = function(filterDepth) {
      return function(node, nodeDepth) {
        return filterDepth === nodeDepth;
      };
    };

    // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal
    let shouldBeDeepEqualSorted = function(array1, array2) {
      array1.sort(function(a, b) {
        return a - b;
      });
      array2.sort(function(a, b) {
        return a - b;
      });
      expect(array1).toEqual(array2); // deep equality
    };

    // the actual tests

    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);
    shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);
  });
});
