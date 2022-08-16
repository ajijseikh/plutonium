// Problem 1
// Module1 : src/logger/logger.js containing the following exported function

// - welcome() -> prints ‘Welcome to my application. I am <name> and a part of FunctionUp Plutonium cohort.’ on console

// Call welcome in route.js inside the test-me handler

    const name="ajij seikh"

     let welcome=function(){
        console.log('Welcome to my application.I am'+" " + `${name}`+" " + 'and a part of FunctionUp Plutonium cohort.')
     }

     module.exports.name=name
     module.exports.welcome=welcome
