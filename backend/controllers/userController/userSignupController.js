const {User,validate} = require('../../model/userModel/userModel');
const bcrypt = require('bcrypt');
const SERVICE_SID = "VAe7de74dc8d7b15184be0cb6074e984c7"
const ACCOUNT_SID  = "AC727f3bdadb360837a5a69a43a2fdd9d0"
const AUTH_TOKEN = "de8cfc9307405b92922b6d38e23aae57"
const Client = require('twilio')(ACCOUNT_SID,AUTH_TOKEN)


//nodemailer



const otpGenerate = (req,res)=>{
    console.log("hello from here ",req.body.phone)
        Client.verify
        .services(SERVICE_SID)
        .verifications.create({
            to:`+91${req.body.phone}`,
            channel:"sms"
        })
        .then((resp)=>{
            console.log("this from usersignupcontroller response ",resp)
            res.status(200).json({resp})
        })
  
}


const   otpInput = (req,res)=>{
    
    const {otp} = req.body;
    Client.verify
    .services(SERVICE_SID)
    .verificationChecks.create({
        to:"+919605257629",
        code : otp
    })
    .then(resp =>{
        console.log('otp ', resp)
    })
}

const userSignup = async(req,res)=>{
    try {
    console.log("hello user controllr ",req.body)

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
        console.log(error)
    }
}


module.exports = {
    userSignup,
    otpGenerate,
    otpInput
}