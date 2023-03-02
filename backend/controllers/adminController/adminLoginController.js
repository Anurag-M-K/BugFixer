const {Admin} = require('../../model/adminModel/adminCredentialModel')
const Joi = require('joi')
const bcrypt = require('bcrypt');

const adminLogin = async(req,res)=>{
   try {

    const {error} = validate(req.body);
    if(error)
    return res.status(400).send({message:error.details[0].message});
    const admin = await Admin.findOne({username:req.body.username});
    if(!admin)
    return res.status(401).json({message:"Invalid username or password"});
    
    const validPassword = await bcrypt.compare(
        req.body.password,
        admin.password
        );
        if(!validPassword)
        return res.status(401).send({message:"invalid username or password"})
       

    const token = admin.generateAuthToken();
    
    res.status(200).json({data:token, message:"Logged in successfully"});

   } catch (error) {
    res.status(500).send({message:"internal server error"})
    
   }
}

const validate = (data)=>{
    const schema = Joi.object({
        username:Joi.string().required().label('username'),
        password:Joi.string().required().label("Password")
    })
    return schema.validate(data)
}


module.exports = {
    adminLogin
}