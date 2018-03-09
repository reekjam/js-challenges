// Based on m, determine how many piles of cubes make up the stack
const pileOfCubes = (m) => {
  let i = 0;
  let sum = 0;

  while (sum < m) {
    i += 1;
    sum += Math.pow(i, 3);
  };

  return sum === m ? i : -1;
};

module.exports = pileOfCubes;
