function countIslands(mapStr) {
  let results = 0;
  let islandMap = mapStr.split('\n');
  
  for (let row = 0; row < strings.length; row++) {
    for (let col = 0; col < strings[row].length; col++) {
      if (islandMap[row][col] === '0') {
        results++;

      }
    }
  }

  // checkNode(strings);
  return results;
}

