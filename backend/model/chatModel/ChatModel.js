const  mongoose  = require( 'mongoose');

console.log("modal")
const ChatSchema = mongoose.Schema({
    members:{
        type:Array,
    },
},
{
    timestamps:true,
}
);


const ChatModel = mongoose.model("Chat",ChatSchema)

module.exports = ChatModel; 