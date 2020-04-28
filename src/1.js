module.exports = (array) => {
  const { length } = array;
  const aux1 = new Array(length).fill(1);
  const aux2 = array.map((item) => [item]);

  for (let i = 1; i < length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[i] > array[j]) {
        aux1[i] = aux1[j] + 1;
        aux2[i] = aux2[j].concat([array[i]]);
      }
    }
  }

  const max = Math.max(...aux1);
  const maxIndex = aux1.indexOf(max);

  return aux2[maxIndex];
};
