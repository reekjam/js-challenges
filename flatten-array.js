const flattenArray = (arr, newArr=[]) => {
  // Recursive
  arr.forEach(a => {
    if (Array.isArray(a)) {
      flattenArray(a, newArr);
    } else {
      newArr.push(a);
    };
  });
  return newArr;

  // Array.from(new String(arr)).filter(a => a != ',');
};

module.exports = flattenArray;
