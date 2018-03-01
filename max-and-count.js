const maxAndCount = (arr) => {
  // Find the max and count

  let max = 0;
  let count = 0;

  arr.forEach(a => {
    if (a > max) {
      max = a;
      count = 1;
    } else if (a === max) {
      count += 1;
    } else {
      a
    }
  });

  return count;
};

module.exports = maxAndCount;
