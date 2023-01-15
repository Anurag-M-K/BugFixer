const jwt = require('jsonwebtoken');
const adminCredential = require('../../model/adminModel/adminCredentialModel')
const bcrypt = require('bcrypt');

const adminLogin = async(req,res)=>{
    let {username,password} = req.body;
    try {
        const admin = await adminCredential.findOne({username});
        if(admin){
            const accessToken = jwt.sign({id:admin.id,isAdmin:admin.isAdmin},"mysecretekey");
            res.json({
                username:admin.username,
                isAdmin:username.isAdmin,
                accessToken,
            })
        }else{
            res.status(400).json('username or password error')
        }
    } catch (error) {
        
    }
}

module.exports = {
    adminLogin
}