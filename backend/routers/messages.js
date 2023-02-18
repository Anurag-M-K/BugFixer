const router = require("express").Router();
const Message = require("../model/Message/Message");
const { message , getMessages } = require("../controllers/chatController/messageController")
const { verifyJWT } = require("../middleware/authMiddleware")

//add
router.post('/',message)

//get
router.get("/:conversationId",verifyJWT,getMessages)

module.exports = router;