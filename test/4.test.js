const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/4');

const { describe, it } = mocha;

describe('exercise 4 - remove duplicate elements of array', () => {
  describe('cases of success', () => {
    it('none is repeated', () => {
      assert.deepEqual(myModule([1, 2, 3, 4]), [1, 2, 3, 4]);
    });

    it('they all repeated consecutively', () => {
      assert.deepEqual(myModule([1, 1, 2, 2, 3, 3, 4, 4]), [1, 2, 3, 4]);
    });

    it('they all repeated not consecutively', () => {
      assert.deepEqual(myModule([3, 1, 4, 2, 3, 1, 4, 2]), [3, 1, 4, 2]);
    });

    it('they all repeated not consecutively 2', () => {
      assert.deepEqual(myModule([3, 1, 4, 4, 3, 1, 2, 2]), [3, 1, 4, 2]);
    });
  });
});
