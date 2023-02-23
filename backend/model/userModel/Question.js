const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [
    {
      type: String,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },

  vote:     [{
    
    type: String,
    
}],
  report: {
    type: Boolean,
    default: false,
  },
  reason: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Questions", questionSchema);
