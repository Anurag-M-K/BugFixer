const { findByIdAndDelete } = require("../../model/communityModal/CommunityModel")
const communityDB = require("../../model/communityModal/CommunityModel")



const addingCommunityPosts = async(req,res)=>{
    const communityPosts = new communityDB(req.body)
    try {
      const savedCommunityPosts =   await communityPosts.save()
        res.status(200).json(savedCommunityPosts)
    } catch (error) {
        res.status(500)
    }
}

const getAllCommunityPosts = async(req,res)=>{
    try {
        const communityPosts = await communityDB.find()
        res.status(200).json(communityPosts)
    } catch (error) {
        res.status(500).send("internal server error")
    }
}

const deleteCommunity = async(req,res)=>{
    const communityId  = req.body.communityId
    res.status(204).send();
    try {
        await communityDB.findByIdAndDelete(communityId)
    } catch (error) {
    }
}


module.exports = {
    addingCommunityPosts,
    getAllCommunityPosts,
    deleteCommunity,
}