const { object } = require("joi");
const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
    question_id: {
        type: String,
        required: true,
    },
    answer:String,
    created_at:{
        type:Date,
        default:Date.now(),
    },
    vote:Number,
    user: Object,

    vote:     [{
    
        type: String,
        
    }],
    comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    },
    accepted:{
        type:Boolean,
        default:false,
    },
   

     
})

module.exports = mongoose.model("Answer",answerSchema)