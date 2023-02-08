
const jwt =require("jsonwebtoken");


const verifyJWT = (req,res,next) => {
  const authHeader = req.headers.authorization;

  console.log(authHeader)

  jwt.verify(authHeader,"secrete",(err,decoded)=>{
    if(err) return res.status(403).json({
      message:"access token is not valid"
    });

    next();
  })
}


exports.verifyJWT = verifyJWT;