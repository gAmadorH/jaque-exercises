const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/5');

const { describe, it } = mocha;

describe('exercise 4 - remove duplicate elements of array', () => {
  describe('cases of success', () => {
    it('the simplest brackets test', () => {
      assert.equal(myModule('()'), true);
    });

    it('the simplest square brackets test', () => {
      assert.equal(myModule('[]'), true);
    });

    it('simplest nested', () => {
      assert.equal(myModule('([])'), true);
    });

    it('less simplest nested', () => {
      assert.equal(myModule('[()[]]'), true);
    });
  });

  describe('cases of failure', () => {
    it('the simplest brackets test', () => {
      assert.equal(myModule(')('), true);
    });

    it('the simplest square brackets test', () => {
      assert.equal(myModule(']['), true);
    });

    it('basic 3', () => {
      assert.equal(myModule('([)]'), false);
    });
  });
});
