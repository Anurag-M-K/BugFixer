const {User,validate} = require('../../model/userModel/userModel');
const bcrypt = require('bcrypt');

const userSignup = async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if(user)
        return res.status(409).send({message:"User with given email already exists!!!"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);

        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({message:"User created successfully"})

    } catch (error) {
        res.status(500).send({message:'internal server error'})
        
    }
}



module.exports = {
    userSignup
}