const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var l = parseInt(nums[0]);
    var x = parseInt(nums[1]);
    var y = parseInt(nums[2]);
    x = l - x > x ? l - x : x;
    y = l - y > y ? l - y : y;
    console.log(x * y * 4);
});