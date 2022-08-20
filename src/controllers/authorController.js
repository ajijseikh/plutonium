const authorModel= require("../models/authorModel")

// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)
const authorCreate= async function(req,res){
    const data=req.body
    let savedData=await authorModel.create(data)
    res.send({msg:savedData})

}
module.exports.authorCreate=authorCreate;



















// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData