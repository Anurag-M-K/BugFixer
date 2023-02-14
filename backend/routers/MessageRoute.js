const express = require("express");
const {addMessage,getMessages} = require("../controllers/ChatController'/messageController")

const router = require("express").Router()


router.post("/",addMessage)
router.get("/:chatId",getMessages)


module.exports = router; 