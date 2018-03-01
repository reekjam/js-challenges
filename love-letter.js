const loveLetter = (str) => {
  let operations = 0;
  const abc = 'abcdefghijklmnopqrstuvwxyz';

  for (let n = 0; n < str.length / 2; n++) {
    if (str[n] != str[str.length - 1 - n]) {
      operations += Math.abs(abc.indexOf(str[n]) - abc.indexOf(str[str.length - 1 -n]))
    };
  };

  return operations;
};

module.exports = loveLetter;
