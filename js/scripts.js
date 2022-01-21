// business logic

// maybe refactor with regular expressions if i have bunch of time left
// maybe add index number after substitutions to keep track of which strings are which
// maybe add a more elegant way of adding spaces


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
          outputArray.push(" Won't you be my neighbor?");
        } else if (indexArray.includes("2")){
          outputArray.push(" Boop!");
        } else if (indexArray.includes("1")){
          outputArray.push(" Beep!");
        } else {
        let joinedIndex = indexArray.join("");
        let joinedNumber = parseInt(joinedIndex);
        outputArray.push(joinedNumber);
        }
      } else if (i === 1) {
        outputArray.push(" Beep!")
      } else if (i === 2) {
        outputArray.push(" Boop!")
      } else if (i === 3) {
        outputArray.push(" Won't you be my neighbor?")
      } else if (i > 3) {
        outputArray.push(" " + i)
      } 
    }
  }
  return outputArray;
}

// ui logic

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let formInput = $("#input").val();
    $("#user-input").hide()
    $("#results").text(beepBoop(formInput));
    $("#results").show();
    $("form")[0].reset();
  });
});