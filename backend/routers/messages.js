const router = require("express").Router();
const Message = require("../model/Message/Message");
const { message , getMessages } = require("../controllers/chatController/messageController")
const { verifyJWT } = require("../middleware/authMiddleware")

router.post('/',message)

router.get("/:conversationId",verifyJWT,getMessages)

module.exports = router;