const anagram = (strA, strB) => {
  var counts = strA.split("").reduce((count, c) => {
    count[c] ? count[c] += 1 : count[c] = 1;
    return count;
  }, {});

  var counts = strB.split("").reduce((count, c) => {
    if (count[c]) {
      count[c] -= 1;
    } else {
      count[c] = -1;
    };

    return count;
  }, counts);

  return Object.values(counts).reduce((sum, n) => {
    sum += Math.abs(n);
    return sum;
  }, 0);
};

module.exports = anagram;
