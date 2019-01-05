// using no extra data structure
export function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.includes(char, i + 1)) {
      return false;
    }
  }
  return true;
}

// using a storage object for better runtime
export function isUniqueUsingObject(str) {
  const strMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (strMap[char]) {
      return false;
    }
    strMap[char] = true;
  }
  return true;
}
