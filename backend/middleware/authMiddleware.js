
const jwt =require("jsonwebtoken");
const { User } = require("../model/userModel/userModel")


const verifyJWT = async(req,res,next) => {
  const token = req.headers.authorization;
try {
  const decoded = await jwt.verify(token, "secrete");
  const userId = decoded.id;
  User.findById(userId).then((user)=>{
    if(user){
      res.locals = user;
        next()
      }else{
        res.send("Invalid token")
      }
    })

  } catch (error) {
    res.json({messge:"Invalid Token"})
    
  }

}

exports.verifyJWT = verifyJWT;