const {User,validate} = require('../../model/userModel/userModel');
const bcrypt = require('bcrypt');
const Client = require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN)
const nodemailer = require("nodemailer");


let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth :{
        user:"anuragmk10@gmail.com",
        pass:"nuofbwxshkmukqbc",
    },
});
const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;



const userSignup = async(req,res)=>{
    console.log("user successfully")
    try {
        let Email = req.body.email;
        let mailDetails = {
            from :"anuragmk10@gmail.com",
            to:Email,
            subject:"Bugfixer",
            html:`<p> YOUR OTP FOR REGISTRATION IN bugfixerE IS ${OTP}</P>`,
        };
        mailTransporter.sendMail(mailDetails,function(err,data){
            if(err){
                console.log("error occurs ",err);
            }else{
                console.log("email send successfully");
            }
        });


        const {error} = validate(req.body);
       
        if(error) return res.status(400).send({message:error.details[0].message});

        const user = await User.findOne({email:req.body.email});
        if(user)
        return res.status(409).send({message:"User with given email already exists!!!"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({message:"User created successfully",...req.body,OTP})

    } catch (error) {
        res.status(500).send({message:'internal server error'})
    }
}

const otpVerify = (req,res)=>{
    console.log("email ",req.body)
    const email = req.body.email;
try {
    User.findOneAndUpdate({email:email},{$set:{verified:1}}).then((response)=>{
        res.status(200,response)
    })
} catch (error) {
}


}

module.exports = {
    userSignup,
    otpVerify
   
}