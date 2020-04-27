module.exports = (expression) => {
  const array = expression.split('');
  const stack = [];
  let isBalanced = false;

  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    if (['(', '['].includes(element)) {
      stack.push(element);
    } else {
      if (stack.length <= 0) {
        break;
      }

      const currentElement = stack.pop();

      if (currentElement === '(' && element !== ')') {
        break;
      }

      if (currentElement === '[' && element !== ']') {
        break;
      }
    }
  }

  if (stack.length === 0) {
    isBalanced = true;
  }

  return isBalanced;
};
