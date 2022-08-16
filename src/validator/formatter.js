// Problem 3
// Module 3: src/validator/formatter.js
// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// const { name } = require("../introduction/intro")

// Call all these functions in route.js inside the test-me route handler

const name = "  functionUp   "
const name1 = "FunCtionUp"

const format = function () {
    console.log(name.trim())
    console.log(name1.toLowerCase())
    console.log(name1.toUpperCase())
}

module.exports.format = format

//<========================================================================================>
// Problem 4
// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays



let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const printDivideMonth = function () {
    const result = []

    const divide = 3;
    for (let i = 0; i < months.length; i += divide) {
        console.log(i)
        const names = months.slice(i, i + divide);
        result.push(names)
        // do whatever

    }
    console.log(result)
    return result
}

module.exports.printDivideMonth = printDivideMonth

//<==========================================================================================>
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
const lodash = require("lodash")
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
const odd = function () {
    const oddNum = []
    for (let i = 0; i < num.length; i++)
        if (num[i] % 2 == 1) {
            oddNum.push(num[i])
        }
    const result = lodash.tail(oddNum)
    console.log(result)
    return result
}
// console.log(odd())

module.exports.odd = odd
//<=========================================================================================>
//  Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them on console

const one = [1, 2, 5, 7, 8]
const two = [3, 2, 5, 6, 9]
const three = [9, 2, 4, 7, 10]
const four = [1, 8, 3, 6, 17]
const five = [2, 5, 7, 6, 16]

const merge = function () {
    const mergedValue = lodash.union(one, two, three, four, five)
    console.log(mergedValue)
    return mergedValue
}
// console.log(merge())

module.exports.merge = merge


//<===================================================================================>
// - Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

//  const obj={
//     "horror":"The Shining",
//     "drama":"Titanic",
//     "thriller":"Shutter Island",
//     "fantacy":"Pans Labyrinth"
//  } 
//  console.log(Object.entries(obj))

let array = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantacy", "Pans Labyrinth"]
]
const frompair = function () {
    const result = lodash.fromPairs(array)
    console.log(result)
    return result
}

module.exports.frompair = frompair

//<=========================================================================================>