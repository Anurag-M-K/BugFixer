const { db } = require("../../model/userModel/Question")
const Questions = require("../../model/userModel/Question")

const getReportedQuestion =async (req,res)=>{
    await Questions.find({report:true}).then((response)=>{
        res.send({data:response})
    })

}
const deleteQuestion = async(req,res)=>{
    try {
        
        const id = req.params.qid;
     const deleteRes = await Questions.findByIdAndDelete(id)
     res.status(200).json(deleteRes)
    } catch (error) {
        res.status(500).json(error)    }
}

const getAllQuestions = async(req,res)=>{
    try {
        const questions = await Questions.find();
        res.status(200).json(questions)
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports = {
    getReportedQuestion,
    deleteQuestion,
    getAllQuestions
}