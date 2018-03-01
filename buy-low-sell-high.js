const buyLowSellHigh = (stockPrices) => {
  if (stockPrices.length < 2) throw 'Must have at least 2 prices to generate profit';

  let low = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  stockPrices.forEach((p, i) => {
    if (i === 0) return;

    let potentialProfit = p - low;

    maxProfit = Math.max(potentialProfit, maxProfit);

    low = Math.min(p, low);
  });

  return maxProfit;
};

module.exports = buyLowSellHigh;
