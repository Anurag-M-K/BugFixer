const router = require("express").Router();
const Conversation = require("../model/Conversation/Conversation");
const  { conversation ,getConversation } = require("../controllers/chatController/conversationController")
const { verifyJWT } = require("../middleware/authMiddleware")
router.post('/',verifyJWT,conversation);

router.get("/:userId",verifyJWT,getConversation)

module.exports = router;