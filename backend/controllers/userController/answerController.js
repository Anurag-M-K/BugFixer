const { response } = require("express");
const AnswerDB = require("../../model/userModel/AnswerModel");

const answerAdd = async (req, res) => {
  const answerData = new AnswerDB({
    question_id: req.body.question_id,
    answer: req.body.answer,
    user: req.body.user,
  });

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

const getAnswerByQId = (req, res) => {
  const id = req.params.id;
  AnswerDB.find({ question_id: id }).then((response) => {
    res.status(200).json(response);
  });
};

const increaseAnswerVote = (req, res) => {
  try {
    const id = req.params.aid;
    const answerVote = req.body.answerVote;
    AnswerDB.findByIdAndUpdate(
      id,
      { $set: { vote: answerVote } },
      { upsert: true }
    ).then((response) => {
      res.status(200).json(response);
    });
  } catch (error) {
    console.log(error);
  }
};

const getParticularAnswer = async (req, res) => {
  const id = req.params.qid;
  try {
    await AnswerDB.find({ question_id: id }).then((response) => {
      res.status(200).json({ response });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  answerAdd,
  getAnswerByQId,
  increaseAnswerVote,
  getParticularAnswer,
};
