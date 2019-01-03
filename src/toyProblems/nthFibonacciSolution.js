
nthFibonacci = function(n) {
  var prevPrevNum = 0;
  var prevNum = 1;
  if(n === 0){
    return 0;
  }
  for(var i = 2; i < n; i++){
    var prevResult = prevPrevNum + prevNum;
    prevPrevNum = prevNum;
    prevNum = prevResult;
  }

  return prevPrevNum + prevNum;
};

/// ******* Solution Code


// recursively -- consider the time complexity
var fibRecurs = function(n){
  return n < 2 ? n : fibRecurs(n-1) + fibRecurs(n-2);
};

// linear with memory property on function object itself
// what are advantages of this?
// how are lines 10-18 evaluated?
// how would you work around not having line 18
var fibMem = function(n){
  if(fibMem.mem[n]) return fibMem.mem[n];
  for(var i = 0; i <= n; i++){
    fibMem.mem[i] = i < 2 ? i : fibMem.mem[i-2] + fibMem.mem[i-1];
  }
  return fibMem.mem[n];
};

fibMem.mem = [];

// constant space & linear time
var fibSpace = function(n){
  var mem = [0,1];
  // what's going on in this for loop?
  for(; n > 1; n--){
	// normally we don't like mutating arrays are we loop. why not?
	// why in this case is it acceptable? (kind of trick question)
    mem.push(mem.shift() +mem[0]);
  }
  // why is it n here? in a simple example is it 1, is it always 1?
  return mem[n];
};
