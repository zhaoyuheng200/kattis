const readline = require('readline');

var firstLine = true;
var input = {};
var lineCount = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * local value
 */
var m;
var totalTime = 0;
var currentTime = 0;
var reverse = [];

/**
 * compute time
 */
var availableToReadQueue = [];


rl.on('line', (line) => {
  if (firstLine) {
    m = parseInt(line);
    firstLine = false;
    return;
  }
  var params = line.split(' ');
  input[lineCount] = {
    time: parseInt(params[0]),
    read: false,
  }
  if (lineCount == 0) {
    input[lineCount].parent = '-1';
    input[lineCount].citationTime = 1;
  }
  if (params[1] != 0) {
    var children = params.slice(2,params.length);
    input[lineCount].ref = children;
    for (child of children) {
      reverse[child] = lineCount;
    }
  }
  if (lineCount != 0) {
    input[lineCount].parent = reverse[lineCount+1];
    input[lineCount].citationTime = input[reverse[lineCount+1]].citationTime + 1;
    input[lineCount].leastTime = input[lineCount].citationTime + input[lineCount].time;
  }
  if (params[1] == 0) {
    availableToReadQueue.push(input[lineCount]);
  }
  
  lineCount++;
  if (lineCount < m) {
    return;
  }
  main(input);
});

function main(input) {
  console.log(input);
  console.log(availableToReadQueue);
}

