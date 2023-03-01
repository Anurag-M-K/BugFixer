const CommentDB = require("../../model/userModel/Comment");

const commentAdd = async (req, res) => {

  try {
    await CommentDB.create({
      question_id: req.params.id,
      comment: req.body.comment,
      user: req.body.user,
    })
      .then((doc) => {
        res.status(201).send({
          status: true,
          message: "Comment added successful",
        });
      })
      .catch(() => {
        res.status(400).send({
          status: false,
          message: "error while comment",
        });
      });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error while adding comment",
    });
  }
};

const getComment =async (req,res)=>{
  const id = req.params.id
const comment =  await CommentDB.find({question_id:id})
res.status(200).json(comment)
}
module.exports = {
  commentAdd,
  getComment
};
