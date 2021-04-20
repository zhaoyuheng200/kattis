/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * two pointer
 * @param numbers
 * @param target
 * @returns {number[]}
 */
var twoSum1 = function (numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let result = numbers[i] + numbers[j];
    if (result < target) {
      i++;
    } else if (result > target) {
      j--;
    } else return [i + 1, j + 1]
  }
  
};
/**
 * disconary
 * @param numbers
 * @param target
 */
var twoSum2 = function (numbers, target) {
  /**
   * dictonary for two sum,
   * key is number
   * value is index
   * @type {{}}
   */
  const dict = {};
  let retval = null;
  numbers.some((num, index) => {
    let requiredNumber = target - num;
    if (dict[requiredNumber] !== undefined) {
      retval = [dict[requiredNumber] + 1, index + 1]
      return true;
    }
    dict[num] = index;
  })
}

console.log(twoSum2([2,3,4], 6))
