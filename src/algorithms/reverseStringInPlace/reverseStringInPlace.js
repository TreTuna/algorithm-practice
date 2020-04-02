export function reverseStringInPlace(string) {
  let charAIndex = 0;
  let charBIndex = string.length - 1;

  while (charAIndex < charBIndex) {
    const temp = string[charAIndex];
    string[charAIndex++] = string[charBIndex];
    string[charBIndex--] = temp;
  }
}
