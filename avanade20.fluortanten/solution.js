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

/**
 * compute time
 */

var base = 0;
var best = 0;
var current = 0;


rl.on('line', (line) => {
  if (firstLine) {
    m = parseInt(line);
    firstLine = false;
    return;
  }
  main(line);
  return;
});

function main(line) {
  if (m === 1) {
    console.log(line);
    return;
  }
  var otherChildren = line.split('0').join('').replace(',','').trim().replace('  ', ' ').split(' ');
  
  for (var i = 0; i < otherChildren.length; i++) {
    otherChildren[i] = parseInt(otherChildren[i]);
    base += otherChildren[i] * (i+1);
  }
  for (var i = otherChildren.length - 1; i >= 0; i--) {
    current += otherChildren[i];
    if (best < current){
      best = current;
    }
  }
  
  console.log(base + best);
  return;
  
}



