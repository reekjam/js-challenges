const findNextSquare = (num) => {
  if (Math.sqrt(num) % 1 != 0) { return -1 };

  return Math.pow(Math.sqrt(num) + 1, 2);
};

module.exports = findNextSquare;
