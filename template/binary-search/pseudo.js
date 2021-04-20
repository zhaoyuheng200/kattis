let j = 0;
let k = size;
while (j != k) {
  let m = Math.floor((j + k) / 2);
  if (tails[m] < x) {
    /**
     * if right
     */
    j = m+1;
  } else {
    /**
     * else left
     */
    k = m;
  }
}
