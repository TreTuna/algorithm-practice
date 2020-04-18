/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/530/week-3/3302/
 * @param {character[][]} grid
 * @return {number}
 */
export function minPathSum(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let rows = grid.length;
  let columns = grid[0].length;

  const dp = [...Array(rows)].map((e) => Array(columns).fill(0));
  dp[0][0] = grid[0][0];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (row === 0 && col === 0) continue;
      dp[row][col] += grid[row][col];
      if (row > 0 && col > 0) {
        dp[row][col] += Math.min(dp[row - 1][col], dp[row][col - 1]);
      } else if (row > 0) {
        dp[row][col] += dp[row - 1][col];
      } else if (col > 0) {
        dp[row][col] += dp[row][col - 1];
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
}
