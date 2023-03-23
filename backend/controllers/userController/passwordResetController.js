const { User } = require("../../model/userModel/userModel")
const sendEmail = require("../../utils/sendEmail")
const bcrypt = require("bcrypt")

const passwordResetPost = async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})
        if(!user)
        return res.status(409).send({message:"User with given email does not exist!"})

        const url = `${process.env.FRONTEND_URL}/password-reset/${user._id}`
        console.log(url)
        await sendEmail(user.email , "Password reset",url)
        res.status(200).send({message:"Reset password link is send to your email"})
    } catch (error) {
        console.log(error)
        res.status(500).send({message:"Internal server error"})
    }
}


const verifyLink = async(req,res)=>{
    console.log(req.params.id)
    try {
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(400).send({message:"Invalid Link"})

        res.status(200).send({message:"Valid Url"})

    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
}

const addingNewPassword = async(req,res)=>{
    try {
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(400).send({message:"Invalid link"})
        if(!user.verified) user.verified = true;
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        user.password = hashPassword;
        await user.save();
        res.status(200).send({message:"Password reset successfully"})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }
}



module.exports = {
    passwordResetPost,
    verifyLink,
    addingNewPassword
}