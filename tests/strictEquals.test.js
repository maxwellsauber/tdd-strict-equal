const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true if BOTH paramaters ARE NOT equal OR integers, BUT are loosely equal', () => {
      const checkNumberOne = '5'
      const checkNumberTwo = 5

      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal OR integers', () => {
      const checkNumberOne = 'a'
      const checkNumberTwo = 7

      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal integers', () => {
      const checkNumberOne = 42
      const checkNumberTwo = 7

      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE equal integers', () => {
      const checkNumberOne = 5
      const checkNumberTwo = 5

      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      expect(checkResult).to.equal(true)
    })
  })
})
