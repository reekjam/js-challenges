// Sort the string based on the number
// embedded in each word
// ex. an4d ea5t you2r pray3ers sa1y you6r vitam7ins
const wordOrder = (str) => {
  const nums = '123456789'.split("");
  const numsHash = nums.reduce((group, n) => {
    group[n] = true; 
    return group;
  }, {});

  str.split(" ").forEach(word => {
    word.split("").forEach(char => {
      if (numsHash[char]) {
        numsHash[char] = word;
      };
    });
  });

  return Object.keys(numsHash)
    .filter(key => numsHash[key] !== true)
    .map(k => numsHash[k])
    .join(" ")
};

module.exports = wordOrder;
