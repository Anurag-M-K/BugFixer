const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    body:{
        type:String,
        required:true,
    },
    user:[{
        type:Object
    }],
})

module.exports = mongoose.model("Community", communitySchema)