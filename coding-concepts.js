// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil", "indigo"]
// b) Verify and explain: partially correct. adds the new item to the end of the array, but it returns the new length as a number. there are now 5 strings in the array instead of 4, so the new length is 5.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: length method will count the number of characters in a string, including the spaces

// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: the index will count the characters inside the string. since its an index, it will start the count at zero.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
//const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: index will count each word within the array of the const declaration named "languages". Index starts the count at zero, but a variable was made to specify an index of 1. "Javascript" would be index = 0.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: it will change all the characters from lowercase to uppercase for both words
// b) Verify and explain: I was incorrect, as it came out as a "TypeError" in the terminal. weekendDays.toUpperCase is not a function. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer: did not have an answer
// b) Verify and explain: incorrect, typeof finds the data type of a variable, .length returns or sets the number of elements in a given array. 