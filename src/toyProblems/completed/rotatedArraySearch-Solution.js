function rotatedArraySearch(rotated, target){
  // Since our goal is O(log n) we will need to search through the array as if this was a binary search array and account for the rotation.
  let low = 0, high = rotated.length - 1, mid;

  while (low <= high) {
    mid = Math.floor((high - low) / 2) + low;
    if (rotated[mid] === target) {
      return mid;
    }
    if (rotated[low] <= rotated[mid]){
      if (rotated[low] <= target && target < rotated[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1
      }
    } else {
      if (rotated[mid] < target && target <= rotated[high]) {
        low = mid + 1;
      } else {
        high = mid - 1
      }
    }
  }
  return -1;
}

// O - Index value of target in rotated array, if not found return -1
// I - Rotated array and target to search for
// C - Goal of O(log n) time complexity
// E - Input	Output
// rotated:
//   [ 4, 5, 6, 0, 1, 2, 3 ]
// target:
//   2	5
// rotated:
//   [ 4, 5, 6, 0, 1, 2, 3 ]
// target:
//   100	-1
































// **** Solution Code

var rotatedArraySearch = function (rotated, target) {
  var left = 0, right = rotated.length - 1;
  while (left <= right) {
    var middle = Math.floor((right + left) / 2);
    if (rotated[middle] === target) { return middle; }
    // check first if a half is sorted; this lets us do our subsequent check
    // consider the fact if we didn't check if a half is sorted, what would happen?
    if (rotated[left] <= rotated[middle]) {
      // subsequent check - this only makes sense if we first check above
      if (rotated[left] <= target && target < rotated[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else { // it means right hand side is sorted - remember in rotated array at least one half (regardless of midpoint) is sorted
      if(rotated[middle] < target && target <= rotated[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return null;
};