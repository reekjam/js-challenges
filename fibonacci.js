const fibonacci = (index) => {
  if (n < 2) {
    return 1;
  } else {
    fibonacci(n - 2) + fibonacci(n - 1);
  };
};

module.exports = fibonacci;
