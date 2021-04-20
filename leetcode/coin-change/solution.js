/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const MAX = amount + 1;
  const minCoins = Array(amount+1).fill(MAX);
  minCoins[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i-coins[j] >= 0) {
        minCoins[i] = Math.min(minCoins[i],minCoins[i - coins[j]] + 1  )
      }
    }
  }
  return minCoins[amount] > amount ? -1 : minCoins[amount];
};

/**
 Runtime: 124 ms, faster than 63.24% of JavaScript online submissions for Coin Change.
 Memory Usage: 43.1 MB, less than 79.77% of JavaScript online submissions for Coin Change.
 */

