const strictEquals = (numOne, numTwo) => {
  //return false //passes 3/4
  //return true //fails 3/4
  //const checkNumOne = Number(numOne) // making them numbers doesn't seem to help, parseInt didnt help either
  // const checkNumTwo = Number(numTwo)

  console.log(parseInt(numOne))
  if (numOne == numTwo) 
  {
    return true
  }
  else{
    return false
  }
}

module.exports = strictEquals