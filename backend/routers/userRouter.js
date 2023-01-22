const router = require('express').Router();
const {userSignup} = require('../controllers/userController/userSignupController')
const {userLogin} = require('../controllers/userController/userLoginController')
const {questionAdd,getQuestion,particularQuestion} = require('../controllers/userController/questionController')
const {answerAdd} = require("../controllers/userController/answerController")
const {commentAdd} = require("../controllers/userController/commentController")

router.post('/userSignup',userSignup)
router.post('/userLogin',userLogin)

router.get("/api",(req,res)=>{  
       res.send("welcome to bugfixer ")
});

router.post('/question',questionAdd)
router.post("/answer",answerAdd)
router.post("/comment/:id",commentAdd)

router.get('/getQuestion',getQuestion);
router.get('/question/:id',particularQuestion)
module.exports = router;