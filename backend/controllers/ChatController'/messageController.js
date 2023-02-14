const MessageModel = require("../../model/chatModel/messageModel");



const addMessage = async(req,res)=>{
    const {chatId,senderId,text} = req.body
    const message = new MessageModel({
        chatId,
        senderId,
        text
    });
    try {
        const result = await message.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getMessages = async(req,res)=>{
    console.log("hello from meessage controller")
    const{chatId} = req.params;

    try {
        const result = await MessageModel.find({chatId})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
addMessage,
getMessages
}