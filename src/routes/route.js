const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController3")

const auth=require("../middleware/auth")
const{authenticate,authorise}=auth

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.login)

//The userId is sent by front end
router.get("/users/:userId",authenticate,authorise, userController.getUser)
// router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",authenticate,authorise, userController.updateUser)
 router.delete('/users/:userId',authenticate,authorise, userController.deleteUser)

module.exports = router;