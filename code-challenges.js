// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// create a variable for boilingPoint that cant be changed, so const.
// create a function and insert a parameter for a inserted number.
// create a condition using if/else statements
// return the num with a string interpolation
// anything other than a number will return a error message

// const temperature1 = 42
// // Expected output: "42 is below boiling point"

// const temperature2 = 350
// // Expected output: "350 is above boiling point"

// const temperature3 = 212
// // Expected output: "212 is at boiling point"

        const boilingPoint = 212
        const temp = (num) => {
            if (num > boilingPoint) {
                return `${num} is above boiling point` 
            }
            else if (num === boilingPoint) {
                return `${num} is at boiling point`
            }
            else if (num < boilingPoint) {
                return `${num} is below boiling point`
            }
            else {
                return 'error'
            }
        }
        console.log(temp())

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
//combine the arrays using concatenation
//add the length method after concatenation 
//run console log to execute

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]

        console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Echo 2023"
//create a function
//use split, reverse, and join built in methods in a return. .split will convert the string into an array, .reverse reverses the order of the values in a array, and .join converts all values from a array into a string.
//execute the function

        function reverseString(str) {
            return str.split("").reverse().join("");
        }
        console.log(reverseString("Echo 2023"))

// Expected output: "3202 ohcE"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
//use the .lastindexof method and apply it to the array variable

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

        console.log(numberOfConnections.lastIndexOf())

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
//use .sort to modify the array.
//reverse (a,b) to change it to largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

        sanDiegoSummerTemperatures.sort(b, a) 
        console.log(sanDiegoSummerTemperatures)
// Expected output: [82, 80, 79, 77, 76, 73, 72]


const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]

        sanDiegoWinterTemperatures.sort((b, a) => a - b)
        console.log(sanDiegoWinterTemperatures)
// Expected output: [68, 67, 66, 66, 62, 59, 59]
