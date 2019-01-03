var hasCycle = function(linkedList){
  //Your beautiful code here
};

// *** Solution Code

// problem is trivial if we are able to modify/mutate the nodes, simply assign a visited property
// we also need to do this in constant space and linear time

// node - it's always important to clarify what the representation of the data structures you are working with look like
var Node = function(value){
  return { value: value, next: null };
};

// we will be taking a tortoise and the hare approach (Floyd's cycle finding algorithm)
// in fact other algorithms exist
// https://en.wikipedia.org/wiki/Cycle_detection
var hasCycle = function(linkedList){

  // here we call the fast pointer fast, but its actually moving at one spot per loop
  var fast = linkedList;
  var slow = linkedList;
  var pause = false;

  // remember, we evaluate the expression in brackets of while loop initially, so this assigns fast to fast.next
  while (fast = fast.next) {
    if (fast === slow) { return true; }
    // the lines below are what make the slow pointer slow
    if (pause) { slow = slow.next; }
    pause = !pause;
  }

  return false;
}