const { User } = require("../../model/userModel/userModel")


const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find()
        console.log("usersn in backend ",users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500)
    }
}

module.exports = {
    getAllUsers
}