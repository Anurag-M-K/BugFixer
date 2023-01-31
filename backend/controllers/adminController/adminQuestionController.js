const { db } = require("../../model/userModel/Question")
const Questions = require("../../model/userModel/Question")

const getReportedQuestion =async (req,res)=>{
    console.log("backend ")
    await Questions.find({report:true}).then((response)=>{
        // console.log("response for reported q ",response)
        res.send({data:response})
    })

}
const deleteQuestion = (req,res)=>{
    try {
        
        console.log("sdhfoashfuadnfoiihjfqhjewefo",req.params.qid)
        const id = req.params.qid;
        console.log("id ",id)
        Questions.findByIdAndDelete(id).then((response)=>{
            console.log(response,"   from delete response")
        })
    } catch (error) {
        console.log("error from delete side",error)
    }
}


module.exports = {
    getReportedQuestion,
    deleteQuestion
}