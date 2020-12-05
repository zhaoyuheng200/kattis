const readline = require('readline');

var firstLine = true;
var input = [];
var lineCount = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * local value
 */
var n,m;
var input = [];
var arrMatrix = [];
var retval;

rl.on('line', (line) => {
  if (firstLine) {
    var params = line.split(' ');
    n = parseInt(params[0]);
    m = parseInt(params[1]);
    /**
     *
     * @type {boolean}
     */
    if (m === 1) console.log(1);
    
    firstLine = false;
    return;
  }
  input = line.split(' ');
  main(input);
});

var dict = {};
var currentBest = -1;

function best(num, position) {
  if (num < m-1) {
    var nextNum = num+1;
    var nextPosition = -1;
    if (position === n-1) {
      return arrMatrix[nextNum][0] + 1 + best(nextNum, arrMatrix[nextNum][0])
    }
    for (var i = 0; i < arrMatrix[nextNum].length; i++) {
      if (arrMatrix[nextNum][i] > position) {
        nextPosition = arrMatrix[nextNum][i];
        break;
      }
    }
    if (nextPosition < 0) {
      nextPosition = arrMatrix[nextNum][0];
    }
    if (nextPosition > position) {
      return nextPosition - position + best(nextNum, nextPosition);
    } else {
      return (n - 1)  - position + nextPosition + 1 + best(nextNum, nextPosition);
    }
  } else {
    return 0;
  }
}

function main(input) {
  for (var i = 0; i < m; i++) {
    arrMatrix[i] = []
  }
  for (var i = 0; i < input.length;  i++) {
    arrMatrix[parseInt(input[i])-1].push(i);
  }
  
  var localVal = 0;
  /**
   * iterate through start point
   */
  for (var i = 0; i < arrMatrix[0].length; i++) {
    var currentStart = arrMatrix[0][i];
    var tmp = best(0, arrMatrix[0][i]);
    if (currentBest < 0 || currentBest > tmp) currentBest = tmp;
  }
  console.log(currentBest+1)
}


