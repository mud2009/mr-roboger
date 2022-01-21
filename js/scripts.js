// business logic

function beepBoop(input){
  let outputArray = [];
  if (isNaN(input)) {
    return "Enter a number, please!"
  } else {
    for (i = 0; i <= input; i += 1) {
      if (i === 0) {
        outputArray.push("0")
      }
      else if (i === 1) {
        outputArray.push("Beep!")
      }
    }
  }
  return outputArray;
}

// ui logic
