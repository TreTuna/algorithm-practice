function countIslands(mapStr) {
  let results = 0;
  let makeMap = function(mapStr){
    let returnMap = [];
    let newMap = mapStr.split('\n');
    newMap.forEach(function(row){
      returnMap.push(row.split(''));
    });
    return returnMap;
  };
  islandMap = makeMap(mapStr);
  let x = 0;
  let y = 0;

  var checkNode = function (x, y){
    if (islandMap[x][y] === '0'){
      results++;
      sinkTheBattleship(x, y);
    }
    if(x < islandMap.length - 1) { checkNode(x + 1, y); }
    x = 0;
    if(y < islandMap[0].length - 1) { checkNode(x, y + 1); }
  }

  var sinkTheBattleship = function (x, y){
    if(islandMap[x][y] === '0') {
      let saveX = x;
      islandMap[x][y] = '.';
      if(x > 0) { sinkTheBattleship(x - 1, y); }
      x = saveX;
      if(x < islandMap.length - 1) { sinkTheBattleship(x + 1, y); }
      x = saveX;
      if(y < islandMap[0].length - 1) { sinkTheBattleship(x, y + 1); }
    } else { return };
  };

  checkNode(x, y);
  return results;
}

let testStr = "..000.\n..000.\n..000.\n.0....\n..000.";
countIslands(testStr);

// ..000.
// ..000.
// ..000.
// .0...
// ..000.