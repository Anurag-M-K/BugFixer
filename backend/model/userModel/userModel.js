const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { schema } = require("../adminModel/adminCredentialModel");

const userSchema = new mongoose.Schema({
  
  firstName: {
     type: String, 
     required: true
     },
  lastName: {
     type: String, 
     required: true 
    },
  email: {
     type: String, 
     required: true
     },
  phone: {
     type: Number,
      required: true 
    },
  password: {
     type: String,
      required: true
     },
  imageUrl: {
    type: String,
  },
  isBlocked: {
     type: Boolean,
      default: false
     },
  verified : {
    type:Number ,
     default:0
    },
    job :{
      type:String,
      
    },
    company:{
      type:String
    },
    community:[{
      type:String
  }],
  reputation:{
    type:Number,
    default:0
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
    },  
    process.env.JWTPRIVATEKEY,
    { expiresIn: "7d" }
  );
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.number().required().label("Phone number"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
