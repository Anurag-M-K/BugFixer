const mongoose = require("mongoose");


const tagSchema = mongoose.Schema({
    tags:[{
        type:String
    }]
})

module.exports = mongoose.model("Tags",tagSchema)