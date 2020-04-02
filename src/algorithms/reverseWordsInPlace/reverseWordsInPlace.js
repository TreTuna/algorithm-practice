export function reverseWordsInPlace(arr) {
  reverseArray(arr);
  let currentWordStart = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === " " || i === arr.length) {
      reverseArray(arr, currentWordStart, i - 1);
      currentWordStart = i + 1;
    }
  }
}

function reverseArray(array, startIndex = 0, endIndex = array.length - 1) {
  while (startIndex < endIndex) {
    const temp = array[startIndex];
    array[startIndex++] = array[endIndex];
    array[endIndex--] = temp;
  }
}
