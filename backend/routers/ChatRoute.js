const {createChat,findChat,userChats,getOppositeUser} =require("../controllers/ChatController'/chatController")
const {verifyJWT} = require("../middleware/authMiddleware")
const router = require("express").Router();

router.post("/",createChat)
router.get('/:userId',verifyJWT,userChats)
router.get("/find/:firstId/:secondId",findChat)
router.get("/get-user-data/:userId",getOppositeUser)


module.exports = router;