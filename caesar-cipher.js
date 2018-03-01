const caesarCipher = (str, offset) => {
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let answer = '';

  str.split("").forEach((char) => {
    if (lower.includes(char.toLowerCase())) {
      var charSet = char === char.toLowerCase() ? lower : upper;
      answer += charSet[(charSet.indexOf(char) + offset) % charSet.length]; 
    } else {
      answer += char;
    };
  });

  return answer;
};

module.exports = caesarCipher;
