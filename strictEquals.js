const strictEquals = (valOne, valTwo) => {

  if (typeof valOne == 'string' && typeof valTwo == 'number') { 
    return false
  } 
  else if (typeof valOne == 'number' && typeof valTwo == 'string') {
    return false
  }
  else{
    if (valOne == valTwo) {
      return true
    }
    else {
      return false
    }
  }
}

module.exports = strictEquals