// Problem 2
// Module 2 : src/util/helper.js

// - printDate() : prints the current date
// - printMonth() : prints the current month
// - getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’

// 	Call all these functions in route.js inside the test-me route handler

let currentDate = new Date()

let presentDate = function() {
    let day = currentDate.getDate()
    let month = currentDate.getMonth() + 1
    let year = currentDate.getFullYear()
    console.log("currentDate"+":"+day + "/" + month + "/" + year)
}


let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const printMonth = function() {
    let date = new Date();
    let currentMonth = months[date.getMonth()];
    console.log(currentMonth)
}




const batch = "plutonium"
const week = "4"
const day = "3"
const topic = "node.js module system."
const getBatchInfo = function() {
console.log(`${batch}`+","+" "+"W"+`${week}`+"D"+`${day}`+","+" "+"the topic for today is"+" "+`${topic}`)
}

module.exports.presentDate=presentDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo



