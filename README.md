Specifications:

Describe: beepBoop()

Test1: "It should return an array with a "0" if the number 0 is inputted"
Code: 
input = "0"
beepBoop(input);
Expected Output: "0"

Test2: "It should return an alternative prompt if the input is not a number"
Code:
input = "a"
beepBoop(input);
Expected Output: "Please enter a number!"

Test3: "It should return an array with "0", and "Beep!", if the input is 1"
Code:
input = "1"
beepBoop(input);
Expected Output: "0", "Beep!"

Test4: "It should return an array with "0", "Beep!", and "Boop!" if the input is 2"
Code:
input = "2"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!"

Test5: "It should return an array with "0", "Beep!", "Boop!", and "Won't you be me neighbor?" if the input is 3"
Code:
input = "3"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?"

Test6: "It should return an array with "0", "Beep!", "Boop!", "Won't you be me neighbor?", and subsequent numbers if the input is above 3 and below 10.
Code:
input = "7"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7

Test7: "If the input is a number above 9, the function should split the string into an array, then subsequently join them and add them to the array.
Code:
input = "11"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7, 8, 9, 10, 11