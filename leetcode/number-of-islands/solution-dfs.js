/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const rowLength = grid.length;
  const colLength = grid[0].length;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        count++;
      }
    }
  }
};

var dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i > grid.length || j > grid[0].length) {
    return;
  } else {
    grid[i][j] = '#';
    dfs(grid, i+1, j);
    dfs(grid, i-1, j);
    dfs(grid, i, j+1);
    dfs(grid, i, j-1);
  }
}
