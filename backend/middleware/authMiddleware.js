
const jwt =require("jsonwebtoken");


 export default async function Auth(req,res,next){
    try {
        const token = req.header.authorization.split(" ")[1];

      const decodedToken =  await jwt.verify(token,"jsonprivatekey")

      req.user = decodedToken

      res.json(token)
    } catch (error) {
        res.status(401).json({error : "Authentication failed"})
    }
}
