# Mr Roboger's Neighborhood

#### by **Will Greenberg**

#### This site will return an array of numbers and strings depending on user input

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* jQuery

## Description

This site allows users to enter a string of numbers, and then return an array of numbers and strings modified by the following set of rules:
>- Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
>- Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
>- Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Link to site

This site is accessible [here](https://mud2009.github.io/mr-roboger/).

## Setup

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open language-suggester/index.html in your browser.

## Known bugs

* None so far.

## Specifications:

### Describe: beepBoop()

- Test1: "It should return an array with a "0" if the number 0 is inputted"
  - Code: 
  - input = "0"
  - beepBoop(input);
  - Expected Output: "0"

-Test2: "It should return an alternative prompt if the input is not a number"
Code:
input = "a"
beepBoop(input);
Expected Output: "Please enter a number!"

-Test3: "It should return an array with "0", and "Beep!", if the input is 1"
Code:
input = "1"
beepBoop(input);
Expected Output: "0", "Beep!"

-Test4: "It should return an array with "0", "Beep!", and "Boop!" if the input is 2"
Code:
input = "2"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!"

-Test5: "It should return an array with "0", "Beep!", "Boop!", and "Won't you be me neighbor?" if the input is 3"
Code:
input = "3"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?"

-Test6: "It should return an array with "0", "Beep!", "Boop!", "Won't you be me neighbor?", and subsequent numbers if the input is above 3 and below 10.
Code:
input = "7"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7

-Test7: "If the input is a number above 9, the function should split the string into an array, then subsequently join them and add them to the array.
Code:
input = "11"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7, 8, 9, 10, 11

-Test8: "Every number below the input number that includes a 3 will be replaced by the string "Won't you be my neighbor?" in the array."
Code:
input = "14"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "Won't you be my neighbor?", 14

-Test9: "Every number below the input number that includes a 2 will be replaced by the string "Boop!" in the array."
Code:
input = "14"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "Boop!", "Won't you be my neighbor?", 14

-Test10: "Every number below the input number that includes a 1 will be replaced by the string "Beep!" in the array."
Code:
input = "14"
beepBoop(input);
Expected Output: "0", "Beep!", "Boop!", "Won't you be me neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022 Will Greenberg