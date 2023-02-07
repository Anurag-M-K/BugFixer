
// const jwt =require("jsonwebtoken");


// const verifyJWT = (req,res,next) => {
//   const authHeader = req.headers.authorization || req.headers.authorization;

//   if(!authHeader?.startsWith("Bearer")) return res.sendStatus(401);

//   jwt.verify(token,"secrete",(err,decoded)=>{
//     if(err) return res.status(403).json({
//       message:"access token is not valid"
//     });
//     req.user = decoded.userData.userId;
//     req.role = decoded.role; res.send(200)
//     next();
//   })
// }


// exports.verifyJWT = verifyJWT;