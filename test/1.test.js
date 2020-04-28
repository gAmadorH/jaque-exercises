const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/1');

const { describe, it } = mocha;

describe('exercise 1 - largest contiguous succession subarray', () => {
  describe('cases of success', () => {
    it('simple test', () => {
      assert.deepEqual(myModule([3, 2, 5, 9, 1, 3]), [2, 5, 9]);
    });

    it('another test', () => {
      assert.deepEqual(myModule([3, 4, 0, 1, 6, 2, 3]), [0, 1, 2, 3]);
    });

    it('one another test', () => {
      assert.deepEqual(myModule([3, 4, -1, 0, 6, 2, 3]), [-1, 0, 2, 3]);
    });

    it('all equals', () => {
      assert.deepEqual(myModule([1, 1, 1, 1]), [1]);
    });

    it('only one', () => {
      assert.deepEqual(myModule([1]), [1]);
    });
  });
});
