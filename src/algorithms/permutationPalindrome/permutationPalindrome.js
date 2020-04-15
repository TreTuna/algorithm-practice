export function permutationPalindrome(str) {
  const dict = new Set();

  for (let char of str) {
    if (dict.has(char)) {
      dict.delete(char);
    } else {
      dict.add(char);
    }
  }
  return dict.size <= 1;
}

// export function permutationPalindrome(str) {
//   const dict = {};
//   let countOfOddChars = 0;

//   for(let char of str){
//     if(dict[char]){
//       dict[char] += 1;
//       if(dict[char] % 2 === 0){
//         countOfOddChars--
//       } else {
//         countOfOddChars++;
//       };
//     } else {
//       dict[char] = 1;
//       countOfOddChars++;
//     }
//   }
//   return countOfOddChars < 2 ? true : false
// }
