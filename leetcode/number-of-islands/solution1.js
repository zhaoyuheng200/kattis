/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  let color = 0;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      if (grid[row][col] === "1") {
        paint(grid, row, col, color);
        color++;
      }
    }
  }
  return color;
};

var paint = (grid, row, col, color) => {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  const queue = [[row, col]];
  while (queue.length > 0) {
    const currentDot = queue.shift();
    const currentRow = currentDot[0];
    const currentCol = currentDot[1];
    grid[currentRow][currentCol] = color;
    for (let neightbors of [-1, 1]) {
      if (currentRow + neightbors >= 0 && currentRow + neightbors < rowLength && grid[currentRow + neightbors][currentCol] === "1") {
        grid[currentRow + neightbors][currentCol] = color;
        queue.push([currentRow + neightbors, currentCol]);
      }
      if (currentCol + neightbors >= 0 && currentCol + neightbors < colLength && grid[currentRow][currentCol + neightbors] === "1") {
        grid[currentRow][currentCol + neightbors] = color;
        queue.push([currentRow, currentCol + neightbors]);
      }
    }
  }
}

var test0 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

var test1 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];

var test2 = [["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]];
numIslands(test1)
