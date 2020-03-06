const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true if both paramaters are equal integers', () => {
      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = '5'

      // call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      // make assertions about what should be RETURNED
      // Test Data shoud return false - both test items are not INT.
      expect(checkResult).to.equal(false)
    })
  })
})
