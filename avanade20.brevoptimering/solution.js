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


var currentOpNodes = [];
var nodeStatus = []

rl.on('line', (line) => {
  if (firstLine) {
    m = parseInt(line);
    firstLine = false;
    for (var i = 0; i < m; i++) {
      currentOpNodes[i] = true;
    }
    nodeStatus.push({
      in: 0,
      out: 0,
    })
    lineCount ++;
    return;
  }
  var params = line.split(' ');
  if (params.length == 2) {
    input.push({
      visited: false,
      index: lineCount,
      m: parseInt(params[0]),
      dist: null,
    })
    lineCount++;
  } else {
    var dist = [];
    for (var i = 0; i < parseInt(params[1]); i++) {
      dist.push({
        index: params[(2+i*2)],
        dist: params[(3+i*2)]
      });
      currentOpNodes[params[(2+i*2)]-1] = false;
    }
    input.push({
      visited: false,
      index: lineCount,
      m: parseInt(params[0]),
      dist
    })
    lineCount++;
  }
  if (lineCount == m) {
    main(input);
  }
  return;
});

function main(input) {
  while (currentOpNodes.indexOf(true) >= 0) {
    var index =
  }
  // while (input.indexOf(true))
  // for (var i = 0; i < input.length; i++) {
  //
  // }
}







