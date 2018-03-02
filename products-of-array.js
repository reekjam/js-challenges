// Calculate the product of the array without
// the value of the current index

/*
O(n^2) time
const productsOfArray = (arr) => {
  return arr.map((a, index) => {
    return arr.filter((ar, i) => {
      return i != index;
    })
    .reduce((product, x) => {
      product *= x;
      return product;
    }, 1);
  });
};
*/

// O(n) solution
const productsOfArray = (arr) => {
  if (arr.length < 2) {
    throw "Array must have at least 2 numbers";
  };

  let productOfInts = [];

  // Use 1 as the initial value to multiply
  let productBefore = 1;

  for (let i = 0; i < arr.length; i++) {
    // Uses a greedy approach to keep a running tab
    // of the product of ints before the index
    productOfInts[i] = productBefore;
    productBefore *= arr[i];
  };

  let productAfter = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    // Same greedy approach as before, but backwards.
    // Multiply the products of ints before and after the index
    productOfInts[i] *= productAfter;
    productAfter *= arr[i];
  };

  return productOfInts;
};

module.exports = productsOfArray;
