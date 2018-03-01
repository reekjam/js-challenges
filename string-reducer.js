const stringReducer = (str) => {
  // Reduce the string by pairs until you can't
  let n = 0;
  let s = str;
  while (n < s.length - 1) {
    if (s[n] === s[n + 1]) {
      s = s.slice(0, n) + s.slice(n + 2);
      n = 0;
    } else {
      n += 1;
    }
  }

  return s.length ? s : "Empty String";
}

module.exports = stringReducer;
