const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let newA = str.split('');
  let arr = [];
 
  let count = 1;
  for(let i = 0; i<newA.length; i++)
    {
      if(newA[i] === newA[i+1])
      {
        count = count+ 1;
      }
      else{
        if(count>1){
        arr.push(count, newA[i]);
        }
        else{arr.push(newA[i]);}
        count = 1;
      }
    }
  return arr.join('');
}

module.exports = {
  encodeLine
};
