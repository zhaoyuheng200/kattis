const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * local value
 */
var m;

function p(x, y) {
  if (x==0 && y==0) {
    return;
  }
  if (x+y === 13) {
    console.log('Never speak again.');
    return;
  }
  if (x === y) {
    console.log('Undecided.');
    return;
  }
  if (x > y) {
    console.log('To the convention.');
    return;
  }
  if (x < y) {
    console.log('Left beehind.');
    return;
  }
};

rl.on('line', (line) => {
  var params = line.split(' ');
  var x = parseInt(params[0]);
  var y = parseInt(params[1]);
  p(x,y);
  return;
});

