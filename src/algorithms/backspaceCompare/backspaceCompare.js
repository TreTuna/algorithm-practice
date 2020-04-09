/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3291/
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function(S, T) {
//   const charArrS = []
//   for(let i = 0; i < S.length; i++){
//     let char = S[i];
//     if(char === "#"){
//       charArrS.pop()
//     } else {
//       charArrS.push(char)
//     }
//   }
//   const charArrT = []
//   for(let i = 0; i < T.length; i++){
//     let char = T[i];
//     let nextChar = T[i+1]
//     if(char === "#"){
//       charArrT.pop()
//     } else {
//       charArrT.push(char)
//     }
//   }
//   return charArrS.reduce((acc, char, i) => {
//     let charT = charArrT[i];
//     if(char !== charT){
//       return false
//     }
//     return true;
//   }, true)
// };

// function backspaceCompare(S, T){
//   let pointS = 0;
//   let pointT = 0;
//   let longestLength = Math.max(S.length, T.length);
//   for(let i = 0; i < longestLength; i++){

//   }
// }

export function backspaceCompare(S, T) {
  let rightS = S.length - 1;
  let rightT = T.length - 1;
  let skipS = 0;
  let skipT = 0;
  while (rightS >= 0 || rightT >= 0) {
    while (rightS >= 0 && (S[rightS] === "#" || skipS > 0)) {
      S[rightS--] === "#" ? ++skipS : --skipS;
    }
    while (rightT >= 0 && (T[rightT] === "#" || skipT > 0)) {
      T[rightT--] === "#" ? ++skipT : --skipT;
    }
    console.log({ rightS, rightT });
    if (S[rightS--] !== T[rightT--]) return false;
  }
  return rightS === rightT;
}
