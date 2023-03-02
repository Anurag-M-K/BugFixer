const express = require("express");
const router = express.Router()
const  { conversation ,getConversation } = require("../controllers/chatController/conversationController")
const { verifyJWT } = require("../middleware/authMiddleware")

router.post('/create-conversation',conversation);

router.get("/:userId",verifyJWT,getConversation)


module.exports = router;