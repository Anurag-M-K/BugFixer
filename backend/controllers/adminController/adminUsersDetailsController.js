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
    await User.findByIdAndUpdate(id,{$set:{isBlocked:true}}).then((res)=>{
    })
    console.log("res from block ",res)

}

const unblockUser = async(req,res)=>{
const id = req.params.id;
await User.findByIdAndUpdate(id,{$set:{isBlocked:false}}).then((res)=>{
    console.log("res that unblock ",res)
})
}

module.exports = {
    getUsersDetails,
    blockUser,
    unblockUser
}