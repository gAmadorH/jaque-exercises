const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src');

const { describe, it } = mocha;

describe('Set', () => {
  describe('Subset', () => {
    it('basic test', () => {
      assert.equal(myModule(1, 1), 2);
    });
  });
});
