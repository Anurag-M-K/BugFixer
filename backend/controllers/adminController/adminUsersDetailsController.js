const {User} = require("../../model/userModel/userModel")



const getUsersDetails = async (req,res)=>{
    try {
        User.find({},(err,users)=>{
            res.send(users)
        })
    } catch (error) {
        console.log("error ",error)
    }
}


const blockUser =async (req,res)=>{
    const id = req.params.id;
    await User.findByIdAndUpdate(id,{$set:{isBlocked:true}}).then((response)=>{
        console.log("responsenwejoejwoeirwe", res)
        res.status(200).json({blocked:true,message:"user blocked successfully"})
        
    })

    console.log("res from block ",res)

}

const unblockUser = async(req,res)=>{
const id = req.params.id;
await User.findByIdAndUpdate(id,{$set:{isBlocked:false}}).then((response)=>{
    console.log("res that unblock ",res)
    res.status(200).json({blocked:false,message:"user unblocked successfully"})
})
}

module.exports = {
    getUsersDetails,
    blockUser,
    unblockUser
}