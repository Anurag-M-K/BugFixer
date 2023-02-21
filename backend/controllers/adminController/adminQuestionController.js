const { db } = require("../../model/userModel/Question")
const Questions = require("../../model/userModel/Question")

const getReportedQuestion =async (req,res)=>{
    console.log("backend ")
    await Questions.find({report:true}).then((response)=>{
        // console.log("response for reported q ",response)
        res.send({data:response})
    })

}
const deleteQuestion = async(req,res)=>{
    console.log("hello anu")
    try {
        
        const id = req.params.qid;
     const deleteRes = await Questions.findByIdAndDelete(id)
     res.status(200).json(deleteRes)
    } catch (error) {
        console.log("error from delete side",error)
    }
}

const getAllQuestions = async(req,res)=>{
    try {
        const questions = await Questions.find();
        res.status(200).json(questions)
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = {
    getReportedQuestion,
    deleteQuestion,
    getAllQuestions
}