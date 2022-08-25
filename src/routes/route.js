const express = require('express');
const router = express.Router();

const BookController= require("../controllers/BookController1")
const{bookCreate,getBook,getBookInYear,getparticularBook,getBookByINR,getRandomBooks}=BookController

router.post("/createBook",bookCreate)
router.get("/getBook",getBook)
router.get("/getBookByYear",getBookInYear)
router.get("/getParticularBook",getparticularBook)
router.get("/getBookByINR",getBookByINR)
router.get("/getRandomBooks",getRandomBooks)
module.exports = router;



























// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)
