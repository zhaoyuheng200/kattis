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
var m
var n

rl.on('line', (line) => {
  if (firstLine) {
    var nums = line.split(' ');
    n = parseInt(nums[0]);
    m = parseInt(nums[1]);
    firstLine = false;
    return;
  }
  input.push(line.split(' '))
  lineCount++;
  if (lineCount < m) {
    return;
  }
  console.log(input);
});

