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
var n,m,k;
var input = [];
var dict = {};
var answer;
var line0, linei;
var isFirstLine = false;

rl.on('line', (line) => {
  if (firstLine) {
    var params = line.split(' ');
    n = parseInt(params[0]);
    m = parseInt(params[1]);
    k = parseInt(params[2]);
    if (n === 1) console.log(1);
    firstLine = false;
    return;
  }
  input.push(line)
  dict[line] = {
    count: 0,
    index: lineCount,
  }
  lineCount++;
  if (lineCount < n) {
    return;
  }
  main(input);
});

function main(input) {
  rec(input);
}

function rec(arr) {
  if (arr.length === 2) {
    
    return;
  }
  var base = arr[0];
  var candidate = [];
  for (var i = 1; i < input.length; i++) {
    if (compareStr(base, arr[i], k)) {
      candidate.push(base, arr[i]);
      base = arr[i+1];
      i++;
    }
  }
  if (candidate.length === 0) {
    (console.log(candidate[0])) ;
    return;
  }
  else {return rec(candidate)};
}


function compareStr(str0, str1, diff) {
  for (var i = 0; i < str0.length; i++) {
    if (str0[i] != str1[i]) {
      diff --;
    }
    if (diff < 0) return false;
  }
  if (diff > 0) return false;
  return true;
}
