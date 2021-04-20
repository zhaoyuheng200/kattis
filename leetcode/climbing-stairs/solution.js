/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  const stairs = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    stairs[i] = stairs[i-2] + stairs[i-1];
  }
  return stairs[stairs.length - 1];
};

/**
 * Runtime: 92 ms, faster than 6.21% of JavaScript online submissions for Climbing Stairs.
 Memory Usage: 38 MB, less than 96.98% of JavaScript online submissions for Climbing Stairs.
 */
