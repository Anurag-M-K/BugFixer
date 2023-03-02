const { User } = require("../../model/userModel/userModel");
const communityDB = require("../../model/communityModal/CommunityModel")


const addingCommunity =async (req,res)=>{
    const id = req.body.id
    try {
        
        const response = await User.findById(id)
        if(!response.community){
        await User.findByIdAndUpdate(id,{$set:{community:req.body.post}},{upsert:true})
        res.status(200).json({message:"community added successfully",response,resComm})
        }else{
            await User.findByIdAndUpdate(id,{$push:{community:req.body.post}})
            
            res.status(200).json({message:"community added successfully",response})
        }

try {
    const community = await communityDB.find({title:req.body.post})
    if(community.user){
       await communityDB.findOneAndUpdate({title:req.body.post},{$push:{user:req.body.id}})
    }else{
     await communityDB.findOneAndUpdate({title:req.body.post},{$push:{user:req.body.id}})
    }
} catch (error) {
    res.status(500).json()
}

        
        
       
    } catch (error) {
        res.status(500)
    }
}



module.exports = {
    addingCommunity
}