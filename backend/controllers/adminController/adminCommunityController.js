const communityDB = require("../../model/communityModal/CommunityModel");

const editCommunity = async(req,res)=>{

    try {
        const updatedData = await communityDB.findByIdAndUpdate(req.body.filteredId,
            {$set:{title: req.body.values.title,body:req.body.values.body}},{upsert: true})

            res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).send("internal server error")
        console.log(error)
    }
}


module.exports= {
    editCommunity
}