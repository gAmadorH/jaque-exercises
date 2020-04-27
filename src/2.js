module.exports = (min, max) => {
  let mun = 0;

  if (!Number.isInteger(min) || min < 0) {
    throw new Error('min must be an integer greater than 0');
  }

  if (!Number.isInteger(max) || max < 0) {
    throw new Error('max must be an integer greater than 0');
  }

  if (max < min) {
    throw new Error('max must be an greater than min');
  }

  for (let i = min; i <= max; i += 1) {
    mun += i;
  }

  return mun;
};
