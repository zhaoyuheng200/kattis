'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  
  main();
});

function readLine() {
  return inputString[currentLine++];
}


/*
 * Complete the 'howManySwaps' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function howManySwaps(arr) {
  const sortedArr = [...arr].sort();
  let isArraySorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != sortedArr[i]) {
      isArraySorted = false;
      break;
    }
  }
  if (isArraySorted) return 0;
  
  const countObj = {
    count: 0
  };
  
  console.log(arr);
  console.log(mergeSort(arr, countObj));
  console.log(countObj.count);
  
}

const merge = (list1, list2, countObj) => {
  let sorted = [];
  while (list1.length > 0 && list2.length > 0) {
    if (list2[0] < list1[0]) {
      let number = list2.shift()
      sorted.push(number);
      countObj.count += list1.length;
    } else {
      sorted.push(list1.shift());
    }
  }
  return sorted.concat([...list1]).concat([...list2]);
}

const mergeSort = (arr, countObj) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), countObj);
  let right = mergeSort(arr.slice(mid), countObj)
  return merge(left, right, countObj);
}


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
  const arrCount = parseInt(readLine().trim(), 10);
  
  let arr = [];
  
  for (let i = 0; i < arrCount; i++) {
    const arrItem = parseInt(readLine().trim(), 10);
    arr.push(arrItem);
  }
  
  const result = howManySwaps(arr);
  
  ws.write(result + '\n');
  
  ws.end();
}

// const array = [5, 1, 4, 2];
// const array2 = [3,7,1,2];
//
// howManySwaps(array2)


function numberOfItems(s, startIndices, endIndices) {
  const closestLeftWallDict = {};
  const closestRightWallDict = {};
  const itemsOnLeft = {};
  let leftWall = -1;
  let rightWall = -1;
  /**
   * find left wall of all items
   */
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (el == '|') {
      leftWall = i;
    }
    closestLeftWallDict[i] = leftWall;
  }
  /**
   * find right wall of all items
   */
  for (let i = s.length - 1; i >= 0; i--) {
    let el = s[i];
    if (el == '|') {
      rightWall = i;
    }
    closestRightWallDict[i] = rightWall;
  }
  /**
   * reset leftWall, find how many items is on the left of each wall
   * @type {number}
   */
  let items = 0;
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (el == '*') {
      items++;
    } else {
      itemsOnLeft[i] = items;
    }
  }
  /**
   * find the correct walls (floor, ceiling), use the ceiling items subtract floor items to get result
   * @type {*[]}
   */
  const retval = [];
  for (let i = 0; i < startIndices.length; i++) {
    const floor = closestRightWallDict[startIndices[i] - 1];
    const ceiling = closestLeftWallDict[endIndices[i] - 1];
    if (floor == -1 || ceiling == -1 || floor == ceiling) {
      retval.push(0);
    } else {
      retval.push(itemsOnLeft[ceiling] - itemsOnLeft[floor]);
    }
  }
  return retval;
}

const arr = '|||||';
const arr1 = '*||||*|*';

numberOfItems(arr, [1], [4]);
