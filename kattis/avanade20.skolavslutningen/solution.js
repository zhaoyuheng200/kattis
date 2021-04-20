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
var m;

/**
 * compute time
 */


var groups = {};

var row, column, letter;

rl.on('line', (line) => {
  if (firstLine) {
    var params = line.split(' ');
    row = parseInt(params[0]);
    column = parseInt(params[1]);
    letter = parseInt(params[2]);
    firstLine = false;
    lineCount ++;
    return;
  }
  if (lineCount-1 < row) {
    input.push(line);
    if (lineCount == row) {
      main(input)
      return;
    }
    lineCount++
  }
  return;
});

function main(input) {
  let arb = 0;
  input.join('').split('').forEach((el) => {
    if (groups[el] === undefined) {
      groups[el] = arb;
      arb++;
    }
  });
  for (var i = 1; i < row; i++) {
    for (var j = 0; j < column; j++) {
      combineGroup(i,j)
    }
  }
  var result = [];
  for (el in groups) {
    if (result.indexOf(groups[el]) < 0) {
      result.push(groups[el]);
    }
  }
  console.log(result.length);
}


function combineGroup(row, column) {
  var charBase = input[0].charAt(column);
  var char = input[row].charAt(column);
  if (groups[charBase] != groups[char]) {
    groups[char] = groups[charBase];
  }
}






