const propertyChecker = (obj, ...props) => {
  // get the first nested property
  const val = obj[props[0]];
  // return the val if it's the last property or if it's undefined
  if (props.length === 1 || !val) return val;
  // get the rest of the properties
  const rest = props.slice(1);
  // recursion with the new object and the rest of the properties
  return propertyChecker(val, ...rest);
};

module.exports = propertyChecker;
