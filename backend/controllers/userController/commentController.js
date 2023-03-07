const CommentDB = require("../../model/userModel/Comment");

const commentAdd = async (req, res) => {
  try {
    const doc = await CommentDB.create({
      question_id: req.params.id,
      comment: req.body.comment,
      user: req.body.user,
    });
    res.status(201).send({
      status: true,
      message: "Comment added successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "Error while adding comment",
    });
  }
};


const getComment = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await CommentDB.find({question_id:id});
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error while fetching comments",
    });
  }
}

module.exports = {
  commentAdd,
  getComment
};
