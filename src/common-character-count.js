const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
   let b = s2.split('');
   for(let i = 0; i<s1.length; i++)
     {
       if(b.includes(s1[i]))
       {
         let index = b.indexOf(s1[i]);
         count++;
         b.splice(index,1);
       }
     }
   return count;
   
 }

module.exports = {
  getCommonCharacterCount
};
