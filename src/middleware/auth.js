const jwt=require("jsonwebtoken")

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token=req.headers["x-auth-token"]
    if(!token) token=req.headers["X-Auth-Token"]
    if(!token){return res.status(500).send({status:false,msg:"token is not present in header"})}
   const decode=jwt.verify(token,"functionUpPlutonium")
      if(!decode){return res.send({status:false,msg:"token is invalid"})}




    next()
}
module.exports.authenticate=authenticate

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
     let token=req.headers["x-auth-token"]
    if(!token) token=req.headers["X-Auth-Token"]
    const decode=jwt.verify(token,"functionUpPlutonium")
    const reqUserId=req.params.userId
    const userLoggIn=decode.userId
    if(reqUserId != userLoggIn)return res.status(403).send({status:false,msg:"not authorise user"})
    
    

    next()
}
module.exports.authorise=authorise