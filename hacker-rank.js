const hackerrank = (str, target) => {
  let targetIndex = 0;

  str.split("").forEach((char) => {
    if (char === target[targetIndex]) {
      targetIndex += 1;
    };
  });

  return targetIndex === target.length;
};

module.exports = hackerrank;
