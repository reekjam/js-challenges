const divisiblePairs = (arr, value) => {
  // Find how many pairs are divisible by a given value
  
  let ans = 0;

  for (let i = 0; i <= arr.length - 1 - 1; i++) {
    for (let j = i; j <= arr.length - 1; j++) {
      if ((arr[i] + arr[j]) % value === 0) {
        ans += 1;
      };
    };
  };

  return ans;
};

module.exports = divisiblePairs;
