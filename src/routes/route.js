const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})
// Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this

//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
router.get("/sol1", function (req, res) {

    let array = [1, 2, 3, 5, 6, 7]
    let sum = 0;
    for (let i in array) {
        sum += array[i];
    }
    let n = array.length + 1;
    expectedSum = Math.floor((n * (n + 1)) / 2);
    missingNumber = expectedSum - sum;
    console.log(missingNumber)
    res.send({
        data: missingNumber
    });
});






//<=============================================================================================================>
// Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr = [33, 34, 35, 37, 38]
    let sum = 0;
    for (let i in arr) {
        sum += arr[i]
    }
    let n = arr.length + 1;
    expectedSum = Math.floor((n * (arr[0] + arr[arr.length - 1])) / 2);
    let missingNumber = expectedSum - sum
    console.log(missingNumber)
    ///LOGIC WILL GO HERE 

    res.send({
        data: missingNumber
    });
});


module.exports = router;














































// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })

// module.exports = router;