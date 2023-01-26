const JWT = require('jsonwebtoken');
const { decode } = require('punycode');

module.exports = async(req,res,next)=>{
    try {
        const token = req.headers['authorization'].split(" ")[1];
        JWT.verify(token, process.env.JWTPRIVATEKEY, (err,decode)=>{
            if(err){
                return res.status(200).send({
                    message:'auth failed',
                    success:false
                });
            }else{
                req.body.userId = decode.id
                next();
            }
        })
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message:"auth failed",
            success:false,
        })
    }
}