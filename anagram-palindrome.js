const anagramPalindrome = (str) => {
  const counts = str.split("").reduce((h, c) => {
    h[c] ? h[c] += 1 : h[c] = 1;
    return h;
  }, {});

  const countOdd = Object.values(counts).filter(n => n % 2 != 0).length;

  if (str.length % 2 != 0 && countOdd > 1) {
    return 'NO';
  } else if (str.length % 2 == 0 && countOdd > 0) {
    return 'NO';
  } else {
    return 'YES';
  };
};

module.exports = anagramPalindrome;
