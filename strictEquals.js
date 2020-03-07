const strictEquals = (numOne, numTwo) => {

  //BELOW WORKS for INTs
  //TO DO: UPDATE TO CHECK TYPE
  //Thinking switch statment and a check function //REFACTORRRRR

  // Need two more tests, Two equal strings, two not equal
  if (typeof numOne == 'string' || typeof numTwo == 'string') 
  { 
    return false
  }else{
    if (numOne == numTwo) {
      return true
    }
    else {
      return false
    }

  }
}

module.exports = strictEquals