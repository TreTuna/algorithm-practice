// Given two strings, write a method to decide is one is a permutation of the other.

export function isPermutation(str1, str2) {
  let charStorage = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (charStorage[char]) {
      charStorage[char]++;
    } else {
      charStorage[char] = 1;
    }
  }
}
