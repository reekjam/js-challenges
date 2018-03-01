const leftRotation = (arr, k) => {
  return arr.reduce(function(newArr, n, i) {
    newArr.push(arr[(i + k) % arr.length]);
    return newArr;
  }, []);
};

module.exports = leftRotation;
