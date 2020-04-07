export function mergeArrays(arr1, arr2) {
  const result = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    const arr1Exhausted = arr1Index >= arr1.length;
    const arr2Exhausted = arr2Index >= arr2.length;
    if (
      !arr1Exhausted &&
      (arr2Exhausted || arr1[arr1Index] <= arr2[arr2Index])
    ) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return result;
}
