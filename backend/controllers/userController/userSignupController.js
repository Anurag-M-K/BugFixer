const {User,validate} = require('../../model/userModel/userModel');
const bcrypt = require('bcrypt');
const SERVICE_SID = "VAe7de74dc8d7b15184be0cb6074e984c7"
const ACCOUNT_SID  = "AC727f3bdadb360837a5a69a43a2fdd9d0"
const AUTH_TOKEN = "de8cfc9307405b92922b6d38e23aae57"
const Client = require('twilio')(ACCOUNT_SID,AUTH_TOKEN)
const nodemailer = require("nodemailer");

//nodemailer





let mailTransporter = nodemailer.createTransport({
    service:"gmail",
    auth :{
        user:"anuragmk10@gmail.com",
        pass:"nuofbwxshkmukqbc",
    },
});
const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;






const userSignup = async(req,res)=>{
    try {
        let Email = req.body.email;
        console.log("email check ",Email)
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
        console.log(error)
    }
}

const otpVerify = (req,res)=>{
try {
    console.log(req.params)
    const otp = req.params.otp
    console.log("id ",otp)
if(OTP  == req.params.otp){
    console.log("before update")
    User.findByIdAndUpdate(id,{$set:{verified:1}}).then((response)=>{
        console.log("res ",response)
        res.send(200,response)
    })
}
} catch (error) {
    console.log(error)
}


}

module.exports = {
    userSignup,
    otpVerify
   
}