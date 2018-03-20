const initializedName = (name) => {
  const namesArray = name.split(" ");

  const initializedName = namesArray.map((name, i) => {
    if (i === 0 || i === namesArray.length - 1) {
      return name;
    } else {
      return `${name[0]}.`;
    }
  });

  return initializedName.join(" ");
};

module.exports = initializedName;
