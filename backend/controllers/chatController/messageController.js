const Message = require("../../model/Message/Message")

const message = async(req,res)=>{
    console.log(req.body);
 
        const newMessage = new Message(req.body.message)
 
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getMessages = async(req,res)=>{
    try {
        const messages = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    message,
    getMessages
}