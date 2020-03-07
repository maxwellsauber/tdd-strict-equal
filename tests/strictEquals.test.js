const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true if both paramaters ARE NOT equal OR numbers, BUT are loosely equal', () => {
      const checkValueOne = '5'
      const checkValueTwo = 5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal OR numers', () => {
      const checkValueOne = 'a'
      const checkValueTwo = 7

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE NOT equal numbers', () => {
      const checkValueOne = 42
      const checkValueTwo = 7

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns true if both paramaters ARE equal numbers', () => {
      const checkValueOne = 5.5
      const checkValueTwo = 5.5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(true)
    })
    it('returns true if both paramaters ARE equal strings', () => {
      const checkValueOne = 'WOOT'
      const checkValueTwo = 'WOOT'

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(true)
    })
    it('returns true if both paramaters ARE NOT equal strings', () => {
      const checkValueOne = 'Lemur'
      const checkValueTwo = 'Hamster'

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
  })
})
