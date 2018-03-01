const sortHashByValue = (hash) => {
  return Object.keys(hash).sort((x, y) => {
    // Use keys to sort by value
    return hash[x] - hash[y];
  }).reduce((newHash, n) => {
    // Build new hash with sorted keys
    newHash[n] = hash[n];
    return newHash;
  }, {});
};

module.exports = sortHashByValue;
