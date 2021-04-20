/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (right > left) {
    let floor = right - left;
    let value = height[right] > height[left] ? floor * height[left] : floor * height[right];
    if (value > max) max = value;
    height[right] > height[left] ? left++ : right--;
  }
  return max;
};

let test = [4,3,2,1,4];
maxArea(test);
