/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/530/week-3/3305/
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// recursive method
function bstFromPreorderR(preorder) {
  if (preorder.length === 0) {
    return null;
  }
  const rootNode = new TreeNode(preorder[0]);
  let leftNodes = [];
  let rightNodes = [];

  for (let i = 1; i < preorder.length; i++) {
    let currentVal = preorder[i];
    if (currentVal < rootNode.val) {
      leftNodes.push(currentVal);
    } else {
      rightNodes.push(currentVal);
    }
  }

  rootNode.left = bstFromPreorder(leftNodes);
  rootNode.right = bstFromPreorder(rightNodes);

  return rootNode;
}

// Double stack method

//we don't call this on an empty stack, ever
const peek = (stack) => stack[stack.length - 1];

function bstFromPreorder(preorder) {
  if (preorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  //these stacks will never be empty
  const ancestors = [root];
  //store cutoffs for left subtrees
  const cutoffs = [Infinity];

  for (let i = 1; i < preorder.length; i++) {
    const curr = new TreeNode(preorder[i]);
    if (curr.val < peek(ancestors).val) {
      const parent = peek(ancestors);
      parent.left = curr;
      ancestors.push(curr);
      cutoffs.push(parent.val);
    } else {
      while (curr.val > peek(cutoffs)) {
        const ancestor = ancestors.pop();
        if (ancestor === peek(ancestors).left) {
          //leaving left subtree, change cutoff
          cutoffs.pop();
        }
      }

      peek(ancestors).right = curr;
      ancestors.push(curr);
    }
  }

  return root;
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
