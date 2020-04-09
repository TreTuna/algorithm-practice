/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3290/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// single pass linear time, constant space
export function middleNode(head) {
  let node = head;
  let count = 0;
  let middleNode = head;
  while (node.next !== null) {
    node = node.next;
    count++;
    if (count % 2 === 0) {
      middleNode = middleNode.next;
    }
  }
  if (count % 2 !== 0) {
    middleNode = middleNode.next;
  }
  return middleNode;
}

// Single pass linear time and space
// function middleNode(head) {
//   const arr = [];
//   while (head !== null) {
//     arr.push(head);
//     head = head.next;
//   }
//   return arr[Math.floor(arr.length / 2)];
// };

// Double pass linear time, constant space
// function middleNode(head) {
//   let node = head;
//   let count = 0
//   while(node.next !== null){
//     node = node.next;
//     count++
//   }
//   let halfIndex = Math.ceil(count / 2)
//   node = head
//   while(halfIndex > 0){
//     node = node.next
//     halfIndex--
//   }
//   return node;
// };
