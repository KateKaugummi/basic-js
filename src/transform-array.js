const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let doubleNext = "--double-next";
  let discardPrev = "--discard-prev";
  let doublePrev = "--double-prev";
  let discardNext = "--discard-next";

  let transArr = [...arr];
  for (let i = 0; i < transArr.length; i++) {
    if (transArr[0] === discardPrev || transArr[0] === doublePrev) {
      transArr.splice(0, 1);
    }
    if (transArr[transArr.length - 1] === discardNext || transArr[transArr.length - 1] === doubleNext) {
      transArr.splice(transArr.length - 1, 1);
    }
    if (transArr[i] == doubleNext) {
      transArr.splice(i, 1, transArr[i + 1]);
    }
    if (transArr[i] == doublePrev) {
      transArr.splice(i, 1, transArr[i - 1]);
    }
    if (transArr[i] == discardPrev) {
      transArr.splice(i - 1, 2);
    }
    if (transArr[i] == discardNext) {
      if (transArr[i + 2] == discardPrev || transArr[i + 2] == doublePrev) {
        transArr.splice(i, 3);
      } else {
        transArr.splice(i, 2);
      }
    }
  }
  return transArr;
}

module.exports = {
  transform
};
