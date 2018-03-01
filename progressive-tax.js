const progressiveTax = (str) => {
  const amount = Math.floor(str.replace("$", ""));
  const brackets = [
    {min: 0, rate: 0.15},
    {min: 45916, rate: 0.205},
    {min: 91831, rate: 0.26},
    {min: 142353, rate: 0.29},
    {min: 202800, rate: 0.33},
  ];
  var taxDue = 0;
  let index = 0;

  while (index < brackets.length) {
    if (amount > brackets[index].min && brackets[index + 1] && amount > brackets[index + 1].min) {
      console.log(`${brackets[index + 1].min - brackets[index].min} taxed at ${brackets[index].rate}`);
      taxDue += (brackets[index + 1].min - brackets[index].min) * brackets[index].rate;
    } else if (amount > brackets[index].min && brackets[index + 1] && amount < brackets[index + 1].min) {
      console.log(`${amount - brackets[index].min} taxed at ${brackets[index].rate}`);
      taxDue += (amount - brackets[index].min) * brackets[index].rate;
    } else if (amount > brackets[index].min && brackets[index + 1] === undefined) {
      console.log(`${amount - brackets[index].min} taxed at ${brackets[index].rate}`);
      taxDue += (amount - brackets[index].min) * brackets[index].rate;
    }
    index += 1;
  };

  taxDue = Math.round(parseFloat(taxDue) * 100) / 100;
  console.log(`Tax Due: $${taxDue}`);
  return taxDue;
};

progressiveTax("$300000");

module.exports = progressiveTax;
