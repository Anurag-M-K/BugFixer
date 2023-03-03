const Conversation = require("../../model/Conversation/Conversation")
const { User } = require("../../model/userModel/userModel")




const getAllMessagedUsers = async(req,res)=>{
 
}
const getUser = async(req,res)=>{
    const friend =   await User.findById(req.params.friendId)
    res.status(200).json(friend)
  }

module.exports = {
    getAllMessagedUsers,
    getUser
}