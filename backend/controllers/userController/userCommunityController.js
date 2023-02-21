const { User } = require("../../model/userModel/userModel")


const addingCommunity =async (req,res)=>{
    const id = req.body.id
    console.log("ethi ",req.body)
    try {
        
        const response = await User.findById(id)
        if(!response.community){
        await User.findByIdAndUpdate(id,{$set:{community:req.body.post}},{upsert:true})
        res.status(200).json({message:"community added successfully",response})
        }else{
            await User.findByIdAndUpdate(id,{$push:{community:req.body.post}})
            
            res.status(200).json({message:"community added successfully",response})
        }
        
        
       
    } catch (error) {
        console.log(error)
        res.status(500)
    }
}



module.exports = {
    addingCommunity
}