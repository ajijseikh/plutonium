const userModel=require("../models/userModel")
const jwt=require("jsonwebtoken")

const createUser=async function(req,res){
        
        const data=await userModel.create(req.body)
        res.send({msg:data})
          
}
module.exports.createUser=createUser

//<=======================================login api ==========================================>
 const login=async function(req,res){
    let data=req.body
    let {emailId,password}=data
    const login=await userModel.findOne({emailId:emailId,password:password})
    if(!login){return res.send("user does't exist")}
    // token 
    const token=jwt.sign({
       userId:login._id.toString(),
      
 }, "functionUpPlutonium"
 ) 
 res.setHeader("x-auth-token",token)
 res.send({status:true,token:token})

 }
module.exports.login=login


//<==================================== get api ==========================================|>

const getUser=async function (req,res){
       
                let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
}

module.exports.getUser=getUser
                
//<========================update api ===================================================>

const updateUser = async function (req, res) {

 let userId = req.params.userId;
let user = await userModel.findById(userId);
        
if (!user) {
return res.send("No such user exists");
 }
      
 let userData = req.body;
 let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
 res.send({ status:true, data: updatedUser });
 }
 
module.exports.updateUser=updateUser     

//<=======================================delete api ====================================>

const deleteUser = async function(req, res) {    
 let userId = req.params.userId
 let user = await userModel.findById(userId)
 if(!user) {
             return res.send({status: false, message: "no such user exists"})
        }
 let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
        res.status(200).send({status: true, data: updatedUser})
      }
      
    module.exports.deleteUser=deleteUser



