const Tags = require("../../model/adminModel/tagModel");
const QuestionDB = require("../../model/userModel/Question")

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
        const hotQuestions = await QuestionDB.find(
            {
            vote:{$gt:2}
          }
        )
        res.status(200).json(hotQuestions)
    } catch (error) {
        res.status(500).json({message:"error"})
    }
}

module.exports = {
    getAllTags,
    getHotQuestions
}