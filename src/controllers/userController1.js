const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//<=============================================== create user ============================>
const createUser = async function (abcd, xyz) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    let data = abcd.body;
    let savedData = await userModel.create(data); 
                                                    
            
    xyz.send({ msg: savedData });
  };
  
  module.exports.createUser=createUser
  //<===================================login =================================================>
  
  const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
      //token create
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "thorium",
          organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, token: token });
    };

    module.exports.loginUser=loginUser
    //<=====================================get api============================================>
    
    const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
    }
   
    module.exports.getUserData=getUserData
    //<=================================update api===============================================>
    const updateUser = async function (req, res) {

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
    res.send({ status: updatedUser,  });
  };
  module.exports.updateUser=updateUser



  //<=========================================Delete api============================================>

  const isDeleteUser = async function(req,res){
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    console.log(user)
    if(!user){return res.send({msg:"user not found"})}
    
    let isDeleteUser = await userModel.findOneAndUpdate({_id:userId },{$set:{isDeleted: true}},{new: true})
    res.send({isDeleteUser})
  }
  module.exports.isDeleteUser=isDeleteUser

