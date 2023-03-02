const Tags = require("../../model/adminModel/tagModel");
const questionDB = require("../../model/userModel/Question")


const getAllTags = async(req,res)=>{
    try {
        const tags = await Tags.find()
        res.status(200).json(tags)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getHotQuestions = async(req,res)=>{
    try {
        const hotQuestions = await questionDB.find({vote:{$gt:1}})
        res.status(200).json(hotQuestions)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTags,
    getHotQuestions
}