const strictEquals = (valOne, valTwo) => {
  return (typeof valOne == typeof valTwo && valOne == valTwo ? true : false)
}
module.exports = strictEquals