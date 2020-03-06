const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns false if both inputs are not equal integers', () => {
      //create test data
      const checkNumberOne = '5'
      const checkNumberTwo = 5

      // call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      // make assertions about what should be true
      expect(checkResult).to.equal(false)
    })
  })
})
