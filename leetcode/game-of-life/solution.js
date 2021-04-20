/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const rowLength = board.length;
  const colLength = board[0].length;
  
  let boardCopy = [];
  board.forEach((row) => {boardCopy.push([...row])});
  
  boardCopy.forEach((rowElement, rowIndex) => {
    rowElement.forEach((colElement, colIndex) => {
      let neighbor = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++){
          const rowNumber = rowIndex + i;
          const colNumber = colIndex + j;
          if ( rowNumber >= 0 && rowNumber < rowLength && colNumber >=0 && colNumber < colLength && boardCopy[rowNumber][colNumber] == 1) {
            neighbor += 1;
          }
        }
      }
      neighbor = neighbor - colElement;
      if (colElement == 1 && (neighbor < 2 || neighbor > 3)) {
        board[rowIndex][colIndex] = 0;
      }
      if (colElement == 0 && neighbor == 3) {
        board[rowIndex][colIndex] = 1;
      }
    })
  })
  
};

console.log(gameOfLife(
  [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))
/**
 expect [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 */
