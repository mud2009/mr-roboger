// business logic

function beepBoop(input){
  let outputArray = [];
  if (isNaN(input)) {
    return "Enter a number, please!"
  } else {
    for (i = 0; i <= input; i += 1) {
      if (i === 0) {
        outputArray.push("0")
      } else if (i > 9) {
        let indexString = i.toString();
        let indexArray = indexString.split("");
        if (indexArray.includes("3")){
          outputArray.push("Won't you be my neighbor?");
        } else {
        let joinedIndex = indexArray.join("");
        let joinedNumber = parseInt(joinedIndex);
        outputArray.push(joinedNumber);
        }
      } else if (i === 1) {
        outputArray.push("Beep!")
      } else if (i === 2) {
        outputArray.push("Boop!")
      } else if (i === 3) {
        outputArray.push("Won't you be my neighbor?")
      } else if (i > 3) {
        outputArray.push(i)
      } 
    }
  }
  return outputArray;
}

// ui logic
