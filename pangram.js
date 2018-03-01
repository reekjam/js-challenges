const isPangram = (str) => {
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  const abcKey = abc.reduce((group, char) => {
    group[char] = 1;
    return group;
  }, {});

  str.split("").forEach((char) => {
    if (abcKey[char.toLowerCase()]) {
      abcKey[char.toLowerCase()] -= 1;
    };
  });

  return !Object.values(abcKey).some(n => n > 0);
};

module.exports = isPangram;
