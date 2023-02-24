const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const adminCredential = mongoose.Schema({
   username:{type:String,required:true},
   password:{type:String,required:true}
});

adminCredential.methods.generateAuthToken = function(){
    const token = jwt.sign({
        id:this._id
    },
    process.env.JWTADMINPRIVATEKEY,{expiresIn:"7d"});
    return token;
};

const Admin = mongoose.model('admin',adminCredential);


module.exports = {Admin};