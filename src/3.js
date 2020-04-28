const noDuplicates = require('./4');

module.exports = (arry, k) => {
  const arr = noDuplicates(arry);

  arr.sort();
  const [element] = arr.slice(-k);

  return element;
};
