const slidingWindow = (arr, value, seriesLength) => {
  // Based on the series length, count the number of times
  // each series adds up to a given value.
  
  let ans = 0;

  for (let i = 0; i <= (arr.length - seriesLength); i++) {
    const sumTotal = 
      arr.slice(i, i + seriesLength).reduce((sum, n) => {
        sum += n;
        return sum;
      }, 0);

    if (sumTotal === value) { ans += 1 };
  };

  return ans;
};

module.exports = slidingWindow;
