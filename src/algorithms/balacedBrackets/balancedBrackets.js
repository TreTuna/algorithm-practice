/*
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis(), curly - brackets { }, and square - brackets[].

  Examples
Input Output
str:
"(x + y) - (4)" true
str:
"(x + y) - (4)" true
str:
"(((10 ) ()) ((?)(:)))" true
str:
"[{()}]" true
str:
"(50)(" false
str:
"[{]}" false
*/

export function isBalanced(str) {
  const currentOpen = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (pairs[char]) {
      currentOpen.push(char);
    } else if (
      char === pairs["["] ||
      char === pairs["{"] ||
      char === pairs["("]
    ) {
      let toBeClosed = currentOpen.pop();
      if (char !== pairs[toBeClosed]) {
        return false;
      }
    }
  }
  if (currentOpen.length > 0) {
    return false;
  }
  return true;
}
