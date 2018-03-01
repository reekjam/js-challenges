const arrayIntersection = (array) => {
  // Get unique keys from each string
  const uniqueInEach = 
    array.reduce((group, string, i) => {
      group[i] = 
        string.split("").reduce((g, a) => {
          g[a] = a;
          return g;
        }, {});
      return group;
    }, {});

  // Count the appearance of each letter in each string
  const counts =
    Object.values(uniqueInEach).reduce((group, hash) => {
      Object.keys(hash).forEach((key) => {
        group[key] ? group[key] += 1 : group[key] = 1;
      });
      return group;
    }, {});

  // Filter out keys where value is less than array length
  answer =
    Object.keys(counts).filter((key) => {
      return counts[key] === array.length
    });

  return answer.length;
};

arrayIntersection(['abbbcd', 'bbcde', 'abdef']);
module.exports = arrayIntersection;
