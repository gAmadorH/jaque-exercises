const assert = require('assert');
const mocha = require('mocha');

const myModule = require('../src/6');

const { describe, it } = mocha;

describe('exercise 6 - schedules and classrooms', () => {
  describe('cases of success', () => {
    it('basic test', () => {
      assert.equal(myModule([
        ['11:00', '14:00,'],
        ['12:00', '15:00,'],
        ['14:30', '16:00,'],
      ]), 2);
    });

    it('test 1', () => {
      assert.equal(myModule([
        ['11:00', '14:00,'],
        ['12:00', '15:00,'],
        ['12:00', '15:00,'],
        ['14:30', '16:00,'],
      ]), 3);
    });

    it('test 1', () => {
      assert.equal(myModule([
        ['11:00', '14:00,'],
        ['12:00', '15:00,'],
        ['12:00', '15:00,'],
        ['14:30', '16:00,'],
        ['15:30', '16:00,'],
      ]), 3);
    });
  });

  describe('cases of failure', () => {
    it('basic test', () => {
      assert.notEqual(myModule([
        ['11:00', '14:00,'],
        ['12:00', '15:00,'],
        ['14:30', '16:00,'],
      ]), 1);
    });
  });
});
