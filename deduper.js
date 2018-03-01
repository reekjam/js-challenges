const deduper = (arr) => {
  const group = arr.reduce((hash, item) => {
    hash[item] = item;
    return hash;
  }, {});

  return Object.values(group);
};

module.exports = deduper;
