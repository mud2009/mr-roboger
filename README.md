Specifications:

Describe: beepBoop()

Test: "It should return an array with a "0" if the number 0 is inputted"
Code: 
input = "0"
beepBoop(input);
Expected Output: "0"

Test: "It should return an alternative prompt if the input is not a number"
Code:
input = "a"
beepBoop(input);
Expected Output: "Please enter a number!"

Test: "It should return an array with "0", and "Beep!", if the input is 1"
Code:
input = "1"
beepBoop(input);
Expected Output: "0", "Beep!"

Test: "It should return an array with "0", "Beep!", and "Boop!" if the input is 2"
Code:
input = "2"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!"