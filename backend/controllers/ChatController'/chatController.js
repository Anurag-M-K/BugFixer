const ChatModel = require("../../model/chatModel/ChatModel")
const {User} = require("../../model/userModel/userModel")

const createChat = async (req,res)=>{
    const newChat = new ChatModel({
        members:[req.body.senderId,req.body.recieverId]
    });

    try {
        const result = await newChat.save()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

const userChats = async(req,res)=>{
    console.log("hello")
    try {
        const chat = await ChatModel.find({
            members : {$in : [req.params.userId]}
        })
        res.status(200).json(chat)
        console.log("chat ",chat)
    } catch (error) {
        console.log("error ",error)
        res.status(500).json(error)
    }
}

const findChat = async(req,res)=>{
    try {
        const chat = await ChatModel.findOne({
            members: {$all:[req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOppositeUser =async (req,res)=>{
    try {
        
        const id = req.params.userId
    await  User.findById(id).then((data)=>{
    res.status(200).json(data)
     })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createChat,
    userChats,
    findChat,
    getOppositeUser
}