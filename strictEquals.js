const strictEquals = (valOne, valTwo) => {
  return (typeof valOne == typeof valTwo && valOne == valTwo)
}
module.exports = strictEquals