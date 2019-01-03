import { Tree } from "./treeCountLeaves";

describe("Tree", function() {
  it("should exist", function() {
    expect(Tree).toBeDefined();
  });
});

describe("collect", function() {
  it("should exist on the Tree prototype", function() {
    expect(Tree.prototype.countLeaves).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof Tree.prototype.countLeaves).toBe("function");
  });

  it("should return a number", function() {
    let root = new Tree("root");
    expect(typeof root.countLeaves()).toBe("number");
  });

  it("should return 1 if the tree root has no children", function() {
    // make a one-node tree
    let root = new Tree();
    // an empty root node is technically a leaf
    expect(root.countLeaves()).toBe(1);
  });

  it("should return 2 if the root has two children", function() {
    let root = new Tree();
    // add two children
    root.addChild(new Tree());
    root.addChild(new Tree());
    // both children are now leaves
    expect(root.countLeaves()).toBe(2);
  });

  it("should still return 2 if one branch has one leaf", function() {
    let root = new Tree();
    // add a leaf
    root.addChild(new Tree());
    // add a branch
    let branch = new Tree();
    root.addChild(branch);
    // add a leaf to the branch
    branch.addChild(new Tree());

    // still only two leaves
    expect(root.countLeaves()).toBe(2);
  });

  it("should return 4 if both branches have two leaves", function() {
    let root = new Tree();
    // add a branch
    let branch1 = new Tree();
    root.addChild(branch1);
    // add two leaves to the branch
    branch1.addChild(new Tree());
    branch1.addChild(new Tree());
    // add another branch
    let branch2 = new Tree();
    root.addChild(branch2);
    // add two leaves to the branch
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());

    // if you're counting, that's four leaves
    expect(root.countLeaves()).toBe(4);
  });

  it("should count leaves on a big tree", function() {
    // keep a list of nodes by depth to compare
    let root = new Tree();
    // branches
    let branch1 = new Tree();
    let branch2 = new Tree();
    root.addChild(branch1);
    root.addChild(branch2);
    // branches
    let branch3 = new Tree();
    let branch4 = new Tree();
    branch1.addChild(branch2);
    branch1.addChild(branch3);
    // branches
    let branch5 = new Tree();
    let branch6 = new Tree();
    branch3.addChild(branch5);
    branch3.addChild(branch6);

    // leaves
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    branch4.addChild(new Tree());
    branch4.addChild(new Tree());
    branch5.addChild(new Tree());
    branch5.addChild(new Tree());
    branch6.addChild(new Tree());
    branch6.addChild(new Tree());

    // so that's eight leaves
    expect(root.countLeaves()).toBe(8);
  });
});
