const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value)
  {
    this.value = value;
  }
  
  encrypt(message, key) {
   if(message === undefined || key === undefined || message === '')
   {
     throw new Error('Incorrect arguments!');
   }
  key = key.toUpperCase();
  let newmes = message.toUpperCase();
  let counter = 0;
  let output = [];
  for(let i = 0; i< newmes.length; i++)
    {
      if(counter === key.length)
      {
        counter = 0;
      }
      if(newmes.charCodeAt(i)> 64 && newmes.charCodeAt(i) < 91)
      {
        let tmp = (newmes.charCodeAt(i)+key.charCodeAt(counter))% 26;
        output.push(alphabet[tmp]);
        counter++;
      }
      else{
        output.push(newmes[i]);
      }
    }
    if(this.value === false)
    {
      output.reverse();
    }
    return output.join('');
  }

  decrypt(message , key) {
    if (message == undefined || key == undefined || message === '') {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    let messtr = '';
    messtr = message.toUpperCase();
    let index = [];
    let countstr = 0;
    for(let i = 0; i < messtr.length; i++) {
    if (countstr === key.length) {
        countstr = 0;
      }
      if(messtr.charCodeAt(i) > 64 && messtr.charCodeAt(i) < 91) {
        let tmp = ((messtr.charCodeAt(i) - key.charCodeAt(countstr)) + 26 ) % 26;
        index.push(alphabet[tmp]);
        countstr++;
      } else {
        index.push(messtr[i]);
      }
    }
    if(this.ttype === false) index.reverse();
    return index.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
