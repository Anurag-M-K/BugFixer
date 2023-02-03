const mongoose = require('mongoose');
const  QuestionDB = require('../../model/userModel/Question');

const questionAdd =  async(req,res)=>{
  
    const questoinData = new QuestionDB({
        title:req.body.title,
        body:req.body.body,
        tags:req.body.tag,
        user:req.body.user,
    });

    await questoinData
    .save()
    .then((doc)=>{
        res.status(200).send({
            status:true,
            data:doc,
        });
    })
  
    .catch((err)=>{
        res.status(400).send({
            status:false,
            message:"error adding question"
        });
    });
};

const getQuestion =  async(req,res)=>{
    QuestionDB.aggregate([
        {
            $lookup:{
                from:"comments",
                let:{question_id:"$_id"},
                pipeline:[
                    {
                        $match:{
                            $expr:{
                                $eq:["$question_id","$$question_id"]
                            }
                        }
                    },
                    {
                        $project:{
                            _id:1,
                            Comment:1,
                            created_at:1,
                        }
                    }
                ],
                as:"comments",
            }
        },
        {
            $lookup:{
                from:"answers",
                let:{question_id:"$_id"},
                pipeline:[
                    {
                        $match:{
                            $expr:{
                                $eq:["$question_id","$$question_id"],
                            }
                        }
                    },
                    {
                        $project:{
                            _id:1,
                        }
                    }
                ],
                as:"answerDetails",
            }
        },
        {
            $project:{
                __v:0
            }
        }
    ])
    .exec()
    .then((questionDetails)=>{
        res.status(200).send(questionDetails);
    })
    .catch((e)=>{
        console.log("error", e)
        res.status(400).send(error)
    })
}


const particularQuestion = async(req,res)=>{
try{
        QuestionDB.aggregate([
            {
                $match:{_id:mongoose.Types.ObjectId(req.params.id)},
            },
            {
                $lookup:{
                    from:"answers",
                    let : {question_id:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq:["$question_id","$$question_id"],
                                }
                            }
                        },
                        {
                            $project:{
                                _id:1,
                                user:1,
                                answer:1,
                                question_id:1,
                                created_at:1
                            }
                        }
                    ],
                    as:"answerDetails"
                }
            },
            {
                $lookup:{
                    from:"comments",
                    let:{question_id:"$_id"},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    $eq : ["$question_id","$$question_id"],
                                }
                            }
                        },
                        {
                            $project:{
                                _id:1,
                                question_id:1,
                                user:1,
                                comment:1,
                                created_at:1
                            }
                        }
                    ],
                    as:"comments",
                }
            },
            {
                $project:{
                    __v:0
                }
            }

        ])
        .exec()
        .then((questionDetails)=>{
            res.status(200).send(questionDetails)
        })
        .catch((e)=>{
            console.log("error", e)
            res.status(400).send(e)
        })
}catch(err){
    console.log("error here ",err)
    res.status(400).send({
        message:"Question not found"
    })
}
}


const decreseVote = (req,res)=>{

    const id = req.body.qid
    const vote = req.body.vote
    QuestionDB.findByIdAndUpdate(id,{$set:{vote:vote}},{upsert:true})
    .then((response)=>{
    })
}
const incrementVote = (req,res)=>{
    console.log("updating votes")
    try {
        
        const id = req.params.qid
        const vote = req.params
        console.log(id)
        console.log(vote)
        QuestionDB.findByIdAndUpdate(id,{$set:{vote:vote}},{upsert:true})
        .then((response)=>{
    
            console.log("response checking re ",response)
        })
    } catch (error) {
    console.log("error while updating ",error)
    
    }
        
    }



    const reportQuestion =(req,res)=>{
        const id = req.params.qid
        QuestionDB.findByIdAndUpdate(id,{$set:{report:true}}).then((response)=>{
            res.send({response})
        })
    }


    const getVotes =(req,res)=>{
        console.log(" backend ")
        // const id = req.params
        QuestionDB.findById(id).then((response)=>{
            console.log("response acame ",response)
      res.status(200).json({response})

        })
    }
module.exports = {
    questionAdd,
    getQuestion,
    particularQuestion,
    decreseVote,
    incrementVote,
    reportQuestion,
    getVotes
}