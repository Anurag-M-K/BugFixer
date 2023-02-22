const Tags = require("../../model/adminModel/tagModel");


const getAllTags = async(req,res)=>{
    try {
        const tags = await Tags.find()
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTags
}