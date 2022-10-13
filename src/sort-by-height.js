const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let val = [];
  let indexes = [];
for(let i = 0; i< arr.length; i++)
  {
    if(arr[i]>0)
    {
      val.push(arr[i]);
      indexes.push(i);
    }
  }
  val.sort((a,b)=> a-b)
  for(let i = 0; i< val.length; i++)
    {
      arr.splice(indexes[i],1,val[i]);
    }
 return arr;
  
}


module.exports = {
  sortByHeight
};
