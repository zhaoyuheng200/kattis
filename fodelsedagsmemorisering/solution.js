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

rl.on('line', (line) => {
  if (firstLine) {
    m = parseInt(line);
    firstLine = false;
    return;
  }
  var params = line.split(' ');
  input.push({
    name: params[0],
    like: parseInt(params[1]),
    bd: params[2],
  })
  lineCount++;
  if (lineCount < m) {
    return;
  }
  main(input);
});

function main(input) {
  var retval = [];
  var dict = {};
  input.forEach((el) => {
    if (!dict[el.bd]) {
      dict[el.bd] = el;
    } else if (dict[el.bd].like < el.like){
      dict[el.bd] = el;
    }
  })
  for (el in dict) {
    retval.push(dict[el].name);
  }
  console.log(retval.length);
  retval.sort();
  for (el of retval) console.log(el);
}

