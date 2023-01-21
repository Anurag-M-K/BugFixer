const AnswerDB = require("../../model/userModel/AnswerModel")

const answerAdd = async(req,res)=>{
    const answerData = new AnswerDB({
        question_id : req.body.question_id,
        answer: req.body.answer,
        user: req.body.user,
    });

    await answerData 
    .save()
    .then((doc)=>{
        res.status(201).send({
            status:true,
            data:doc,
        });
    })
    .catch((err)=>{
        res.status(201).send({
            status:true,
            message:"Error while addng answer"
        });
    });
};


module.exports ={
    answerAdd
}