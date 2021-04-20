/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const newAlphabet = order.split('');
  const newWords = [];
  words.forEach((word) => {
    newWords.push(word.split('').map((char) => {
      return alphabet[newAlphabet.indexOf(char)];
    }).join(''));
  })
  for (let i = 0; i < newWords.length - 1; i++) {
    if (newWords[i] > newWords[i+1]) {
      return false;
    }
  }
  return true;
};

// isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz");
isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz");
