const alternating = (str) => {
  return str.split("").reduce((answer, char, i) => {
    if (str[i] === str[i + 1]) { answer += 1 };
    return answer;
  }, 0);
};

module.exports = alternating;
