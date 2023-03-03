const {User} = require("../../model/userModel/userModel")



const getUsersDetails = async (req,res)=>{
    try {
        User.find({},(err,users)=>{
            res.send(users)
            
        })
    } catch (error) {
    }
}


const blockUser =async (req,res)=>{
    const id = req.params.id;
    await User.findByIdAndUpdate(id,{$set:{isBlocked:true}}).then((response)=>{
        res.status(200).json({blocked:true,message:"user blocked successfully"})
    })
}

const unblockUser = async(req,res)=>{
const id = req.params.id;
await User.findByIdAndUpdate(id,{$set:{isBlocked:false}}).then((response)=>{
    res.status(200).json({blocked:false,message:"user unblocked successfully"})
})
}

const getUser = async(req,res)=>{
  const friend =   await User.findById(req.params.friendId)
  res.status(200).json(friend)
}

module.exports = {
    getUsersDetails,
    blockUser,
    unblockUser,
    getUser
}