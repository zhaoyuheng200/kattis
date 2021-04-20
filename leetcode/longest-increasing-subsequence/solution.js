/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let lengthList = Array(nums.length).fill(0);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lengthList[i] = Math.max(lengthList[i], lengthList[j])
      }
    }
    lengthList[i] += 1;
    max = Math.max(max, lengthList[i]);
  }
  return max;
};
