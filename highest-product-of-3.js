function highestProductOf3(arr) {
  let low = arr[0];
  let high = arr[0];
  let highest_product_of_2 = arr[0] * arr[1];
  let lowest_product_of_2 = arr[0] * arr[1];
  let highest_product_of_3 = arr[0] * arr[1] * arr[2];

  arr.forEach(a => {
    highest_product_of_3 = Math.max(
        highest_product_of_2 * a,
        lowest_product_of_2 * a,
        highest_product_of_3
    );
    highest_product_of_2 = Math.max(highest_product_of_2, a * high, a * low);
    lowest_product_of_2 = Math.min(lowest_product_of_2, a * high, a * low);
    high = Math.max(high, a);
    low = Math.min(low, a);
  });

  return highest_product_of_3;
};

module.exports = highestProductOf3;
