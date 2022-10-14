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
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`)
    }
    if (arr.length === 0) return arr;

    if (arr.every(elem => 'number' === typeof (elem))) return arr;
    // if (arr.includes(elem => ('number' || 'string') !== typeof (elem))) return false;

    const cloneArray = arr.slice();
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-prev') {
            if (i === 0) {
                cloneArray.splice(0, 1);
            } else if (arr[i - 2] === '--double-next') {
                cloneArray.splice(counter - 1, 2);
            } else if (arr[i - 2] === '--discard-next') {
                cloneArray.splice(counter - 1, 1);
            } else {
                counter--
                cloneArray.splice(cloneArray[counter - 1], 2);
            }
        }
        if (arr[i] === '--double-prev') {
            if (i === 0) {
                cloneArray.splice(0, 1);
            } else if (arr[i - 2] === '--discard-next') {
                cloneArray.splice(cloneArray[counter] - 1, 1);
                counter--;
            } else {
                cloneArray[counter] = cloneArray[counter - 1]
            }
        }
        if (arr[i] === '--discard-next') {
            if (i === arr.length - 1) {
                cloneArray.splice(-1, 1);
            } else {
                counter--;
                cloneArray.splice(cloneArray[counter], 2);
            }
        }
        if (arr[i] === '--double-next') {
            if (i === arr.length - 1) {
                cloneArray.splice(-1, 1);
            } else {
                cloneArray[counter] = cloneArray[counter + 1]
            }
        }
        counter++
    }
    return cloneArray;
}

module.exports = {
  transform
};
