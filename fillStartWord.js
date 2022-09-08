const { template } = require('@babel/core');
//ให้เขียน Function ชื่อ fillStartWord (startWord, word) เพื่อรับข้อความใด ๆ โดยให้ return wordข้อความที่รับเข้ามาและเติม startWord ก่อนหน้าข้อความนั้น 
//โดยถ้า word นั้นมี startword นั้นอยู่แล้ว ไม่ต้องเติม startword อีก โดยถ้า word มีค่า null หรือ undefined ให้ return เป็น undefined
function fillStartWord(startWord, word) {
  if (word === undefined || word === null) {
    return undefined;
  }
  let answer;
  word.includes(startWord) ? (answer = word) : (answer = startWord + word);

  return answer;

}

module.exports = fillStartWord;
