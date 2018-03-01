const palindrome = (str) => {
  let index = 0;
  let isPalindrome = true;

  while (index <= str.length / 2 && isPalindrome) {
    if (str[index] != str[str.length - 1 - index]) {
      isPalindrome = false;
    };

    index += 1;
  };

  return isPalindrome;
};

module.exports = palindrome;
