const intersection = (arrA, arrB) => {
  let a = 0;
  let b = 0;
  const answer = [];

  while (a < arrA.length && b < arrB.length) {
    if (arrA[a] < arrB[b]) {
      a++;
    } else if (arrA[a] > arrB[b]) {
      b++;
    } else {
      answer.push(arrA[a]);
      a++;
      b++;
    }
  };

  return answer;
};

module.exports = intersection;
