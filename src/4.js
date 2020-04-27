module.exports = (input) => {
  const output = [];

  input.forEach((element) => {
    if (!output.includes(element)) {
      output.push(element);
    }
  });

  return output;
};
