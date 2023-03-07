const { response } = require("express");
const AnswerDB = require("../../model/userModel/AnswerModel");
const {User } = require("../../model/userModel/userModel")
const questoinDB = require("../../model/userModel/Question")

const answerAdd = async (req, res) => {
  const answerData = new AnswerDB({
    question_id: req.body.question_id,
    answer: req.body.answer,
    user: req.body.user,
  });

  //updating users reputation y adding 10 points for answering
  const user = await User.findByIdAndUpdate(answerData.user._id,
    {
      $inc:{reputation: 10}
    },
    {
      new: true,
    })

    await answerData
      .save()
      .then((doc) => {
        res.status(201).send({
          status: true,
          data: doc,
        });
      })
    .catch((err) => {
      res.status(201).send({
        status: true,
        message: "Error while addng answer",
      });
    });
};

const getAnswerByQId = async(req, res) => {
  const id = req.params.id;
  const response = await AnswerDB.find({ question_id: id })
    res.status(200).json(response);
};


const getParticularAnswer = async (req, res) => {
  const id = req.params.qid;
  try {
    await AnswerDB.find({ question_id: id }).then((response) => {
      res.status(200).json({ response });
    });
  } catch (error) {
  }
};

// addming answer vote 
const voteAnswer = async (req, res) => {
  const aId = req.body.aId;;
  const objectId = res.locals._id;
  const userId = objectId.toString();
  try {
    const answer = await AnswerDB.findById(aId);
    if(answer.vote.filter((like)=> like === userId).length > 0){
      return res.status(400).json({ error: "Already voted" });
    }
    answer.vote.unshift(userId);
    await answer.save();

    //increase users reputation by 1 points on every upvote of the answer
    const user = await User.findByIdAndUpdate(answer.user._id)
    user.reputation +=1;
    await user.save();

    res.status(200).json(answer.vote);
    
  } catch (error) {
    res.status(500).json({ error })
    }
}


///decresing  answer vote 
const downVoteAnswer = async (req, res) => {
  const aId = req.body.aId;;
  const objectId = res.locals._id;
  const userId = objectId.toString();
  try {
    const answer = await AnswerDB.findById(aId);
    if(answer.vote.filter((like)=> like === userId).length === 0){
      return res.status(400).json({ error: "Answer has not been voted" });
    }
    const removeIndex = answer.vote.map((like)=>like === userId).indexOf(userId);

    answer.vote.splice(removeIndex, 1);
    await answer.save();
    
  } catch (error) {
    cosnole.log(error)
    res.status(500).json({ error })
    }
}


//get answers for a single questions 
const getQuestionAnswers = async (req, res) => {
  try {
    const answers = await AnswerDB.find({question_id:req.params.id})
    res.status(200).json(answers)
  } catch (error) {
    res.status(500).json({ error})
  }
}

///deleting answer from view question page in userside
const deleteAnswer = async (req, res) => {
  const objectId = res.locals._id;
  const userId = objectId.toString();
  const id = req.body.aId
  try {
   const answer = await AnswerDB.findById(id);
   if(answer.user._id === userId){
    await AnswerDB.findByIdAndDelete(id);
    res.status(200).json({
      status: true,
    });
   }else{
    res.status(400).json({message:"You do not have permission to delete"})
   }
  } catch (error) {
    res.status(500).json({ error });
  }
};




//acceoting answer by question owner 
const acceptingAnswer = async (req, res) => {
  try {
    const objectId = res.locals._id;
    const userId = objectId.toString();
    const id = req.body.aId

    const answer = await AnswerDB.findById(id)
    const question =await questoinDB.findById(answer.question_id)
    if(question.user._id === userId ){
      if(answer.accepted === false){
        answer.accepted = true;
        
        //updating answered users reputation by 15 points
       const user = await User.findById(answer.user._id)
       user.reputation += 15;
       await user.save();
        await answer.save();
        res.status(200).json(answer)
      } 
    }else{
      res.status(400).json({message:"You are not allowed to accept this answer"})
    }
  } catch (error) {
    res.status(500).json()
  }
}

module.exports = {
  answerAdd,
  getAnswerByQId,
  voteAnswer,
  downVoteAnswer,
  getParticularAnswer,
  getQuestionAnswers,
  deleteAnswer,
  acceptingAnswer
};
