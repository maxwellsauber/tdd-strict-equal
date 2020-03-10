const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true when given equal values of the same type', () => {
      const checkValueOne = 5
      const checkValueTwo = 5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(true)
    })
    it('returns fale when given unequal values of the same type', () => {
      const checkValueOne = 42
      const checkValueTwo = 7

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns false when given equal values of different types', () => {
      const checkValueOne = '5'
      const checkValueTwo = 5

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
    it('returns false when given different values of different types', () => {
      const checkValueOne = 'WOOT'
      const checkValueTwo = true

      const checkResult = strictEquals(checkValueOne, checkValueTwo)

      expect(checkResult).to.equal(false)
    })
  })
})