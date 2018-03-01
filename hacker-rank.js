const hackerrank = (str) => {
  // 'hackerrank' appears in the string in the same order
  const target = "hackerrank";
  let targetIndex = 0;

  str.split("").forEach((char) => {
    if (char === target[targetIndex]) {
      targetIndex += 1;
    };
  });

  return targetIndex === target.length;
};

module.exports = hackerrank;
