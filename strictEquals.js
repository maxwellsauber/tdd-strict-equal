const strictEquals = (valOne, valTwo) => {

  if (typeof valOne != typeof valTwo) { 
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