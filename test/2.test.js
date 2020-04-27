const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/2');

const { describe, it } = mocha;

describe('exercise 2 - sum range of values', () => {
  describe('cases of success', () => {
    it('basic test', () => {
      assert.equal(myModule(3, 6), 18);
    });

    it('min and max are equals', () => {
      assert.equal(myModule(3, 3), 3);
    });

    it('min is equals to cero', () => {
      assert.equal(myModule(0, 4), 10);
    });

    it('min and max are equals and both are 0', () => {
      assert.equal(myModule(0, 0), 0);
    });
  });

  describe('cases of failure', () => {
    it('min is greater than max', () => {
      assert.throws(() => myModule(5, 4), Error);
    });

    it('min is negative', () => {
      assert.throws(() => myModule(-1, 0), Error);
    });

    it('max is negative', () => {
      assert.throws(() => myModule(0, -1), Error);
    });

    it('min is not integer', () => {
      assert.throws(() => myModule(0.5, 0), Error);
    });

    it('max is not number', () => {
      assert.throws(() => myModule(0, 'a'), Error);
    });
  });
});
