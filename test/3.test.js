const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/3');

const { describe, it } = mocha;

describe('exercise 3 - k-th largest element', () => {
  describe('cases of success', () => {
    it('basic test', () => {
      assert.equal(myModule([7, 2, 5, 9, 8, 3], 1), 9);
    });

    it('basic test', () => {
      assert.equal(myModule([7, 2, 5, 9, 8, 3], 2), 8);
    });

    it('basic test', () => {
      assert.equal(myModule([7, 2, 5, 9, 8, 3], 3), 7);
    });

    it('all are the same', () => {
      assert.equal(myModule([7, 7, 7, 7, 7], 2), 7);
    });

    it('only one, k = 1', () => {
      assert.equal(myModule([666], 1), 666);
    });

    it('only one, k = 4', () => {
      assert.equal(myModule([666], 4), 666);
    });
  });
});
