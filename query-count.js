const queryCount = (arr, queries) => {
  return queries.reduce(function(qs, q) {
    qs[q] = arr.filter(a => a === q).length;
    return qs;
  }, {});
};

module.exports = queryCount;
