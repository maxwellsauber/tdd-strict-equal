const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true if BOTH paramaters ARE NOT equal OR integers, BUT are loosely equal', () => {
      const checkValueOne = '5'
      const checkValueTwo = 5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal OR integers', () => {
      const checkValueOne = 'a'
      const checkValueTwo = 7

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal integers', () => {
      const checkValueOne = 42
      const checkValueTwo = 7

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE equal integers', () => {
      const checkValueOne = 5
      const checkValueTwo = 5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(true)
    })
    it('returns true if both paramaters ARE equal strings', () => {
      const checkValueOne = '5'
      const checkValueTwo = '5'

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(true)
    })
    it('returns true if both paramaters ARE NOT equal strings', () => {
      const checkValueOne = 'Lemur'
      const checkValueTwo = '5'

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
  })
})
