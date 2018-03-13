const formatPhoneNumber = (arr) => {
  let format = '(xxx) xxx-xxxx';

  arr.forEach(n => {
    format = format.replace('x', n);
  });

  return format;
};

module.exports = formatPhoneNumber;
