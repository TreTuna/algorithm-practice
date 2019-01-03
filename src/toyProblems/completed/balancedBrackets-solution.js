function isBalanced (str) {
  const currentOpen = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  for(let i = 0; i < str.length; i++) {
    let char = str[i];
    if(pairs[char]) {
      currentOpen.push(char);
    } else if (
      char === pairs['['] ||
      char === pairs['{'] ||
      char === pairs['(']
    ) {
      var toBeClosed = currentOpen.pop();
      if(char !== pairs[toBeClosed]) {
        return false;
      }
    }
  }
  if(currentOpen.length > 0) {return false;
  }
  return true;
};





































// ****** Solution Code

var isBalanced = function(str){
  var stack = [];
  var pairs = {'{':'}','[':']','(':')'}


  for (var i = 0; i < str.length; i++) {
    var chr = str[i];

    if (pairs[chr]){
      stack.push(chr);
    } else if (
      chr === '}' ||
      chr === ']' ||
      chr === ')'
    ) {
      if (pairs[stack.pop()] !== chr){
        return false;
      }
    }
  }

  //return false if any unclosed brackets remain
  return stack.length === 0;
};