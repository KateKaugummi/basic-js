const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let array = [];
  for (let i = 0; i < string.length; i++) {
    let newStr = string.split("");
    newStr.splice(i, 1);
    array.push(newStr.join(""));
  }

  return +array.sort()[array.length - 1];
}

module.exports = {
  deleteDigit
};
